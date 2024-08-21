// import { deleteTask } from "@/utils/actionTodo";
import React from "react";

// const DeleteForm = ({ id }: any) => {
const DeleteForm = () => {
    // return <form action={deleteTask}>
    return <form>
        {/* <input type="hidden" name="id" value={id} /> */}
        <input type="hidden" name="id" />
        <button className="delete">X</button>
    </form>;
}

export default DeleteForm;