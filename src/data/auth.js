import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

// user credentials
const login = async (credentials) => {
    // console.log(credentials);
    try {
        connectToDb();
        const user = await User.findOne({username : credentials.username}).lean().exec();


        if (!user) {
            throw new Error("wrong credentials");
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        
        if (!isPasswordCorrect) {
            throw new Error("incorrect passwords");
        }
        return user;
    } catch (error) {
        console.log(error);
        // throw new Error("failed to login");
    }
}

// require to learn fundamentals of login
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                    
                }
            }
        })
    ],
    callbacks: {
         
        async signIn(user) {
            const {account, profile} = user;
            
            
            if (account.provider === 'github') { // Changed from user.account.provider to account.provider
                connectToDb();
                try {
                    const existingUser = await User.findOne({ email: profile.email }); // Changed from user.profile.email to profile.email
                    if (!existingUser) {
                        const newUser = new User({
                            username: profile.login, // Changed from user.profile.login to profile.login
                            email: profile.email,
                            img: profile.avatar_url, // Changed from user.profile.avatar_url to profile.avatar_url
                            password: 67890,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log("Error occurred while finding or creating user:", error);
                    return false;
                }
            }

            return true;
        },
        ...authConfig.callbacks,
    },
});