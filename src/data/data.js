import mongoose from "mongoose";
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import { unstable_noStore as noStore } from "next/cache";

// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Mona"},
//     {id: 3, name: "Raja"},
//     {id: 4, name: "Selto"}
// ]

// const posts = [
//     {id: 1, name:"John", body:"....", title:"Post-1", userId: 1},
//     {id: 2, name:"Mona", body:"....", title:"Post-1", userId: 1},
//     {id: 3, name:"Raja", body:"....", title:"Post-1", userId: 1},
//     {id: 4, name:"Selto", body:"....", title:"Post-1", userId: 1}
// ]

// data fetcing functions alternative to the api data fetcing functions
export const getPosts = async () => {
    noStore();  //disable chaching
    try {
        connectToDb();
        // return all the posts 
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        // throw new Error("Failed to fetch posts");
        console.log("can not fetched posts in data.js")
    }
    
} 

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post");
    }
    
}

export const getUser = async (userId) => {
    try {
        connectToDb();
        const user = await User.findById(userId);
        
        if (!user) {
            console.log("User not found");
        }
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user");
    }
}

export const getUsers = async () => {
    // return users;
    try {
        connectToDb();
        // return all the users
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        console.log("can not fetched posts in data.js")

    }
}