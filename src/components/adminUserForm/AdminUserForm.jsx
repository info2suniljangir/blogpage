"use client";
import { addUser } from "@/data/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

import React from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
    <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
