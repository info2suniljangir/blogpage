"use client";
import React, { useEffect, useState } from "react"
import Image from "next/image";
import style from "./contact.module.css";



const ContactPage = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  },[]);

  const randomNumber = Math.random();
  console.log(randomNumber);
  
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image src="/contact.png" alt="contact.png" fill />
      </div>

      <div className={style.formContainer}>
      {isClient && randomNumber}
        <form action="" method="post" className={style.contactForm}>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="Mobile number" />
        <textarea type="text" placeholder="write something here" id="" rows={10} cols={20}  />
        <button type="submit" className={style.submitButton}>Send</button>
        </form>
        </div>


    </div>
  )
};

export default ContactPage;
