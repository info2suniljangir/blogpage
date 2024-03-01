"use server";
import React from "react";
import { addItem } from "@/data/action";
import { removeItem } from "@/data/action";


// use api routes for complex applications instead of server action
const ServerActionTest = () => {
  return (
    <div>
        <form action={addItem}>
            <input type="text" placeholder="title" name="title"/>
            <input type="text" placeholder="description" name="description"/>
            <input type="text" placeholder="userId" name="userId"/>
            <input type="text" placeholder="slug" name="slug"/>
            <input type="text" placeholder="img" name="img"/>
            <button type="submit" >Add data</button>
        </form>

        <form action={removeItem}>
            <input type="text" placeholder="id" name="id" />
            <button type="submit" >Delete</button>
        </form>
    </div>
  )
};

export default ServerActionTest;
