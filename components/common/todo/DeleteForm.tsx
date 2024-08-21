import { deleteTask } from "@/utils/actionTodo";
import React from "react";

const DeleteForm = ({ id }: any) => {
    return <form action={deleteTask}>
        <input type="hidden" name="id" value={id} />
        <button className="delete">X</button>
    </form>;
}

export default DeleteForm;