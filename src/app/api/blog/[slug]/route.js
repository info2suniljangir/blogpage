import { connectToDb } from "@/data/utils";
import { NextResponse } from "next/server";
import { Post } from "@/data/models";
import React from "react";

// dynamic api routes
export const GET = async (request, {params}) => {
    const {slug} = params;

    try {
        connectToDb();

        const post = await Post.findOne({slug});
        // responding to api request
        return NextResponse.json(post); 
        console.log("I am done");
        
    } catch (error) {
        console.log(error);
        throw new Error("the post has not been fetched");
    }
 }

//  to delete a post put {method: "DELETE"} in fetch api;
 export const DELETE = async (request, {params}) => {
    const {slug} = params;

    try {
        connectToDb();
        return Post.deleteOne({slug});
        console.log("the post has been deleted successfully");
        
    } catch (error) {
        console.log(error);
        throw new Error("the post has not been deleted");
    }
 };