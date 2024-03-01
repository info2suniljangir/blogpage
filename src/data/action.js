"use server";
import React from "react";
import { connectToDb } from "./utils";
import { Post } from "./models";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import bcrypt from "bcrypt";

// addItem and removeItem are server actitons
export const addItem = async (formData) => {
    const {title, description, userId, slug, img} = Object.fromEntries(formData.entries());
    try {
        connectToDb();
        const newPost = new Post({title, description, userId, slug, img});
        
        // mongoose method
        await newPost.save();
        console.log("data saving successful");

    } catch (error) {
        console.log(error.message);
    }
}

export const removeItem = async (formData) => {
    const {id} = Object.fromEntries(formData.entries());

    try {
        connectToDb();
        // mongoose method
        await Post.findByIdAndDelete(id);
        console.log("successfully deleted");
    } catch (error) {
        console.log(error.message);
    }
};

export  const handleSignWithGithub = async () => {
    "use server"
      await signIn("github");
      console.log("signed in successfully");
  }

  export const handleLogout = async () => {
    "use server"
    await signOut("github");
    console.log("logout successfully");
  };


//   auth registeration         //previousState used because of useFormState hook
  export const register =async (previousState, formData) => {
        const { username, email, password, repeatpassword } = Object.fromEntries(formData);

        if (password !== repeatpassword) {
            return {error: "Password does not match"};
            // throw new Error("Password does not match");
            // console.log("Password does not match");
            // return;              //return statement stop execution of function
        }

        // generate a salt and hash on seperate function call
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // mongo db and auth fundamentals remaining to learn
        try {
            connectToDb();
            const existingUser = await User.findOne({username});
            if (existingUser) {
                // console.log("username already exist");
                return {error: "Username already exist"};
            }
            if (!existingUser) {
                // creating a new user
                const newUser = new User({
                    username,
                    email,
                    password: hashedPassword,

                });
                await newUser.save();
                return {success : true};
            }
            
        } catch (error) {
            console.log(error.message);
            return {error : "error in register action"};
        }
  }

  export const login = async (previousState, data) => {
    const {username, password} = Object.fromEntries(data); 
    
    try {
        await signIn("credentials", {username, password}); //next redirect
        return {success : "user signed in successfully"};
    } catch (err) {
        if(err.type === "CredentialsSignin") {
            return {error : "username or password are incorrect"};
        }
        // dealing with NEXT_REDIRECT error.
        // https://nextjs.org/docs/app/api-reference/functions/redirect#example
        // another way is throw err;
        // note- catching error and handle this error is not good idea use throw err instead
        throw err;
    }
  }
