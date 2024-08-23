'use client'
import { deleteTask } from "@/utils/actionTodo";
import React from "react";

export default function DeleteForm({ id }: any) {
    const delTask = () => {
        deleteTask(id);
    };
    return (
        <>
            {/* <form action={deleteTask}> */}
                {/* <input type="hidden" name="id" value={id} /> */}
                <button className="delete" id={id} onClick={delTask}>X</button>
            {/* </form> */}
        </>
    );
}
