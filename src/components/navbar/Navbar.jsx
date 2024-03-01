import React from "react"
import Links from "../links/Links";
import style from "./style.module.css"
import Navlink from "../links/navLink/navlink";
import { auth } from "@/data/auth";




const Navbar = async () => {

  // session gives the user data after login
  const session = await auth();
  // console.log(session.isAdmin);
  return (
    <div className={style.container}>
      <div className={style.logo}>Logo</div>
      <div>
    <Links session={session} />
      </div>
    </div>
  )
};

export default Navbar;
