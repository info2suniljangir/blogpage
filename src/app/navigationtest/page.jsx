"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react"

const NavigationTest = () => {
    // client side routing tests
    const pathName = usePathname();
    const route = useRouter();
    const searchParams = useSearchParams();

    const queryParameter = searchParams.get("q");
    
  return (
    <div>
      <h1>This is navigation test</h1>
      <button onClick={() => route.forward() }>got to home page</button>
    </div>
  )
};

export default NavigationTest;
