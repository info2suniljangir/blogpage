import Link from "next/link";
import React from "react"

const NotFound = () => {
  return (
    <div>
        <h1>Not Found</h1>
        <p>May be you enteredd an incorrect url</p>
        <Link href="/">Return Home</Link>
    </div>
  )
};

export default NotFound;
