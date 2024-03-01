import React from "react";
import { Post } from "@/data/models";
import { connectToDb } from "@/data/utils";
import { NextResponse } from "next/server";

// api routes
export const GET = async () => {
    
    try {
        connectToDb();

        const posts = await Post.find(); 

        // respond to api requests
        return NextResponse.json(posts);
        console.log("i got fetched data in rout handler");
        
    } catch (error) {
        console.log(error.message);
        console.log("this is error in route GET");
    }
}