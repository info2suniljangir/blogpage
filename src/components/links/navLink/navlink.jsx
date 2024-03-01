"use client";
import Link from "next/link";
import React from "react"
import style from "./navLink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({item}) => {
    const pathName = usePathname();
    // can read the clint side url pathname
  return (
      <Link className={`${style.container} ${pathName === item.path && style.active }`} href={item.path}>{item.title}</Link>
  )
};

export default Navlink;
