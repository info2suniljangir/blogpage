"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./loginform.module.css";
import { handleSignWithGithub, login } from "@/data/action";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);


  return (
    <form className={styles.login} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button className={styles.submitButton} type="submit">
        Submitt
      </button>
      {state?.error && <p>{state.error}</p>}
      <Link href={"/register"}>Sign Up</Link>
    </form>
  );
};

export default LoginForm;
