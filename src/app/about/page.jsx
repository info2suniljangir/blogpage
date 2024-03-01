import Image from "next/image";
import React from "react"
import style from "./about.module.css";

// Both static and dynamic metadata through generateMetadata are only supported in Server Components.
export const metadata = {
  title: ' about page title',
  description: ' about page description',
}

const AbootPage = () => {
  return (
    <div className={style.container}>
    <div className={style.textContainer}>
      <h2 className={style.subTitle}>About Agency</h2>
      <h1 className={style.title}>We create digital ideas that are bigeer, braver, bolder</h1>
      <p className={style.description}>We create digital ideas that are bigger, braver, bolder, and better. We bileave in good ideas flexiblity and precission. We are world's our special team best consulting and finance solution provider. We range of web and softwere development service</p>
    <div className={style.boxes}>
      <div className={style.box}>
        <h1>10 K+</h1>
        <p>Year of experience</p>
      </div>
      <div className={style.box}>
        <h1>10 K+</h1>
        <p>Year of experience</p>
      </div>
      <div className={style.box}>
        <h1>10 K+</h1>
        <p>Year of experience</p>
      </div>
    </div>
    </div>
    <div className={style.imageContainer}>
      <Image src="/webdev.png" alt="images.png" fill/>
    </div>
    </div>
  )
};

export default AbootPage;
