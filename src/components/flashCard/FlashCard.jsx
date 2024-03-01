import React from "react";
import style from "./FlashCard.module.css";
import Image from "next/image";
import Link from "next/link";

const FlashCard = ({post}) => {
    
    return(
        <div className={style.container}>
        <div className={style.top}>
        <div className={style.imageContainer}>
            <Image src={post.img} alt="card.png" className={style.img} fill/>
        </div>
            <span className={style.date}>20/10/2024</span>
        </div>
        <div className={style.bottom}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.description}>{post.description}</p>
        <Link className={style.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
)
}

export default FlashCard;