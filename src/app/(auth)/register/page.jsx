
import React from "react";
import styles from "./page.module.css";
import RegestrationForm from "@/components/registerForm/RegistrationForm";


const RegisterPage = () => {
  
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>

      <RegestrationForm />
    </div>
    </div>
  )
};

export default RegisterPage;
