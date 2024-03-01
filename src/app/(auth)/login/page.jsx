import React from "react"
import { handleSignWithGithub, login } from "@/data/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = () => {

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <form  action={handleSignWithGithub}>
        <button className={styles.github} type="submit">sign in with github</button>
      </form>
    <LoginForm />

      </div>
    </div>
  )
};

export default LoginPage;
