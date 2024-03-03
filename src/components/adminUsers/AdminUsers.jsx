import { getUsers } from "@/data/data";
import styles from "./adminUsers.module.css"
import Image from "next/image";
import React from "react"
import { deleteUser } from "@/data/action";

const AdminUsers = async () => {

  const users = await getUsers();
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className={styles.user}>
            <div className={styles.detail}>
              <Image src={user.img || ""} alt="" width={50} height={50} />
              <span className={styles.userName}>{user.username}</span>
            </div>
            <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id}/>
            <button className={styles.deleteButton}>Delete</button>
            </form>
          </div>
        )
      })}
    </div>
  )
};

export default AdminUsers;
