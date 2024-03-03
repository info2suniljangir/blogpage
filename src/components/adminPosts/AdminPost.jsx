import { getPosts } from "@/data/data";
import styles from "./adminPost.module.css"
import Image from "next/image";
import React from "react"
import { removeItem } from "@/data/action";

const AdminPosts = async () => {
  "use server"
  const posts = await getPosts();

  


  return (
    <div className={styles.contianer}>
      <h1>posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <div className={styles.detail}>
              <Image src={post.img || "/noAvatar.png"} alt="" width={50} height={50} />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={removeItem}>
            <input type="hidden" name="id" value={post.id}/>
            <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        )
      })}
    </div>
  )
};

export default AdminPosts;
