import mongoose from "mongoose";
import { Schema } from "mongoose";

// schema -A database schema defines how data is organized within a relational database; this is inclusive of logical constraints such as, table names, fields, data types, and the relationships between these entities. Schemas commonly use visual representations to communicate the architecture of the database, becoming the foundation for an organization’s data management discipline. This process of database schema design is also known as data modeling.
const userSchema = new Schema({
    username: {
        required: true,
        type: String,
        unique: true,
        min:3,
        max:20
    },
    email: {
        type: String,
        required: true,
        unique:true,
        max:50
    },
    password: {
        type: String,
        required: true,
        min:5,
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps:true});


const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique:true
    }
}, {timestamps:true});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
//  a model is a constructor function that corresponds to a specific MongoDB collection. It allows you to create, read, update, and delete documents in that collection using JavaScript code.