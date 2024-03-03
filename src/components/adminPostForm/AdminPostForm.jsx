"use client"
import { addItem } from "@/data/action";
import styles from "./adminPostForm.module.css"
import { useFormState } from "react-dom";
import React from "react"

const AdminPostForm = ({userId}) => {

  const [state, formAction] = useFormState(addItem, undefined);
  return (
    <form action={formAction} className={styles.container}>
    <h1>Add Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="img" placeholder="img" />
        <textarea type="text" name="description" placeholder="description" rows={10} />
        <button>add</button>
        {state && state.error}
    </form>
  )
};

export default AdminPostForm;
