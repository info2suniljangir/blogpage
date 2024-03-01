import React, { Suspense } from "react"
import style from "./singlePostPage.module.css"
import Image from "next/image";
import PostUser from "@/components/postUser.jsx/postUser";
import { getPost } from "@/data/data";
import { metadata } from "../page";


// FETCHING DATA WITH API
const fetchedData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {cache: "no-store"});
  if(!res.ok) {
    throw new Error("Something wrong in blog page");
  }

  return res.json();
}


// Dynamic metadata
export const generateMetadata = async ({params}) => { 

  // console.log(params);
  // the data is fetched only once and got memoized
  // const post = await getPost(params.slug);
  const post = await fetchedData(params.slug);
  // console.log(params.slug);

  return {
    title: post.title,
    description: post.description
  }
}

const singlePostPage = async ({params}) => {

  // WITH API
  // const post = await fetchedData(params.slug);

  // WITHOUT API
  const post = await getPost(params.slug);

  return (
    <div className={style.container} >
      <div className={style.imgContainer}>
        <Image className={style.img} src={post.img} alt="beauti.jpg" fill />
      </div>
      <div className={style.textContainer}>
      <h1 className={style.title}>{post.title}</h1>
      <div className={style.detail}>
        <div className={style.avatar}>
            <Image  src="/avatar.jpg" alt="avatar.jpg"  fill />
        </div>
       {/* put post user here */}
       <Suspense fallback={<div>loading...</div>}>
       <PostUser userId={post.userId}/>
       </Suspense>
        <div className={style.detailText}>
            <span className={style.detailTitle}>Date</span>
            <span className={style.detailValue}>{post.createdAt.toString().slice(4,15)}</span>
        </div>
      </div>
      <div className={style.description}>
        {post.description}
      </div>

      </div>
    </div>
  );
};

export default singlePostPage; 
