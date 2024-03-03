// MIDDLEWARE CONFIGURATION
export const authConfig = {
    // 
    pages : {
        signIn : "/login",
    },
    providers : [],
    callbacks: {
  
       async jwt({ token, user }) {
        // console.log(user?._doc); //alternative option for lean().exec() function in login function
        if(user) {
            token.id = user.id;
            token.isAdmin = user.isAdmin;
        }
        return token;
    },
    async session ({session, token}) {
        // console.log(token);
        if (token) {
            session.id = token.id;
            session.isAdmin = token.isAdmin;
        }
        return session;
    },
        // WE CAN TAP IN THE INCOMING REQUEST WITH THE HELP OF MIDDLEWAR
       async authorized({request, auth}) {
            const user = auth?.user;
            // console.log(auth);
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

        // PROTECTION FROM UNAUTHORIZED ACCESS
            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
           if(isOnAdminPanel && !auth?.isAdmin) {
                return false; //RETURN TO LOGIN PAGE
           }

            // ONLY AUTHENTICATED USER CAN REACH THE BLOG PAGE
           if(isOnBlogPage && !user) {
                return false; //RETURN TO LOGIN PAGE
           }
           
            // ONLY AUTHENTICATED USER CAN REACH THE LOGIN PAGE
            if(isOnLoginPage && user) {
                    return Response.redirect(new URL("/", request.nextUrl)); //REDIRECT TO HOMEPAGE
            }
           
            return true;
        }
    },
};