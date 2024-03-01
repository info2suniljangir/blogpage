"use client";
import Link from "next/link";
import React from "react";
import style from "./links.module.css"
import Navlink from "./navLink/navlink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/data/action";

// the best way to handle navbar
const navBarLinks = [

  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  const isAdmin = true;
  return (
    <div className={style.container}>
    <div className={style.links}>
      {navBarLinks.map((link, index) => {
        return <Navlink key={link.title} item={link} />
    })}
   {session?.user ? (
    <>
      {session.user && <Navlink item={{title: "admin", path:"/admin"}} />} 
      <form action={handleLogout}>
      <button className={style.accountActionButton} type="submit" >Logout</button>
      </form>
    </>
   ) : (
    <Navlink item={{title:"Login", path:"/login"}}/>
   )}
    </div>
    <button className={style.menuButton}  onClick={() => setOpen((prev) => (!prev))}><Image src="/menu.png" className={style.hamburgerMenu}  width={20}
      height={20} alt="burger.png"/></button>
    {
      open && <div className={style.mobileLinks}>
        {navBarLinks.map((link, index) =><Navlink key={link.title} item={link} />)}
      </div>
    }
    </div>
  );
};

export default Links;