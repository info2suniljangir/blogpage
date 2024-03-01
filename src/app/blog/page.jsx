import React from "react"
import FlashCard from "@/components/flashCard/FlashCard";
import style from "./blog.module.css";
import { getPosts } from "@/data/data";


// FETCHING DATA WITH API
const fetchedData = async () => {
  // the data is fetched from api routes created in this app  
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:36000}});
  // {cache: "force-cache"} //default cache
  // {cache: "no-store"} not caching
  // {next:{revalidate:36000}} refreshing every hour
  if(!res.ok) {
    throw new Error("Something wrong in blog page");
  }

  return res.json(); //data.json() returns a promise
}

// Both static and dynamic metadata through generateMetadata are only supported in Server Components.
export const metadata = {
  title: ' blog page title',
  description: ' blog page description',
}

const BlogPage = async () => {
  // this will show query parameters
  // console.log(searchParams);
  // {prams, searchParams}
  // FETCH DATA WITH API
  // const posts = await fetchedData();
  
  // FETCH DATA WITHOUT API
  const posts = await getPosts();
  return (
    <div className={style.contanier}>
    {posts.map((post) => {
      return (
      <div className={style.card} key={post.id}>
      <FlashCard post={post} />
      </div>      

      )
    })}
    </div>
    
  )
};

export default BlogPage;
