import NextAuth from "next-auth";
import { authConfig } from "./data/auth.config";

// the middleware function that handle request and run for all matcher
// using this configureation telling react to do the things inside authconfig
export default NextAuth(authConfig).auth;

// middleware run for all routes that matching thsi configuration   
export const config = {
    matcher : ['/((?!api|static|.*\\..*|_next).*)'] // regular expressions [search later]
};