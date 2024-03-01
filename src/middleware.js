import NextAuth from "next-auth";
import { authConfig } from "./data/auth.config";

export default authMiddleware =  NextAuth(authConfig).auth;

export const config = {
    matcher : ['/((?!api|static|.*\\..*|_next).*)'] // regular expressions [search later]
};