"use client";
import React, { useEffect } from "react";
// Step-1 => useFormState import from react dom
import { useFormState } from "react-dom";
import { register } from "@/data/action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./registerForm.module.css";

const RegestrationForm = () => {
  // Step-2 => useFormState take 2 input
  // 1 - callback function
  // 2- value of initial state
  const [state, formAction] = useFormState(register, undefined);
  // Step-3 => useFormState return two objects
  // 1- value of state  
  // 2- the action function
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);


  return (
    // Step-4 => use action function in the form action
    // step-5 => return a previous state value to the callback  
    <form className={styles.register} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="repeatpassword"
        name="repeatpassword"
      />
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
      {state?.error && <p>{state.error}</p>}
      <Link href={"/login"}>Already have an account?</Link>
    </form>
  );
};

export default RegestrationForm;
