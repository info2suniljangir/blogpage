import React from "react";
import style from "./postUser.module.css";
import { getUser } from "@/data/data";

// FETCHING DATA WITH API
// const fetchedData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if(!res.ok) {
//       throw new Error("Something wrong in blog page");
//     }
  
//     return res.json();

// }

const PostUser = async ({userId}) => {

  // FETCH DATA WITH API
    // const post = await fetchedData(userId);

    // FETCH DATA WITHOUT API
    const user = await getUser(userId);
  return (
    <div className={style.container}>
    <span className={style.title}>Author</span>
    <span className={style.value}>{user.username}</span>
</div>
  )
};

export default PostUser;
