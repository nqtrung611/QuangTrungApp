import { deleteTask } from "@/utils/actionTodo";
import React from "react";

export default function DeleteForm({ id }: any) {
    return <form action={deleteTask}>
        <input type="hidden" name="id" value={id} />
        <button className="delete">X</button>
    </form>;
}
