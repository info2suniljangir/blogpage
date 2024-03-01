export const authConfig = {
    // 
    pages : {
        signIn : "/login",
    },
    providers : [],
    callbacks: {
    // the user is undefined here
    //  can't fix this issue i have checked every thing
    // first give the user data and then return undefined
    // need help to fix this issue otherwise move ahead
    // LEARN THE FUNDAMENTALS OF AUTHENTICATION
       async jwt({ token, ...rest }) {
        console.log(rest);
        // if(user) {
        //     token.id = user.id;
        //     token.isAdmin = user.isAdmin;
        // }
        return token;
    },
    async session ({session, token}) {
        if (token) {
            session.id = token.id;
            session.isAdmin = token.isAdmin;
        }
        return session;
    },
       async authorized({session, auth}) {
            // console.log(session);
            // console.log(auth);
            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
            
           

            // ONLY AUTHENTICATED USER CAN REACH THE BLOG PAGE

           
            // ONLY AUTHENTICATED USER CAN REACH THE LOGIN PAGE
           
            return true;
        }
    },
};