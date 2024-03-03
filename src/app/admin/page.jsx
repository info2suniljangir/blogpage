import AdminPosts from "@/components/adminPosts/AdminPost";
import styles from "./page.module.css"
import React, { Suspense } from "react"
import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import { auth } from "@/data/auth";

const Admin = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminPosts />
          </Suspense> 
        </div>
        <div className={styles.col}>
        <AdminPostForm userId={session.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminUsers />
          </Suspense> 
        </div>
        <div className={styles.col}>
        <AdminUserForm />
        </div>
      </div>
    </div>
  )
};

export default Admin;
