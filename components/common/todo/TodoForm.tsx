'use client'
import { createTask } from "@/utils/actionTodo";
import React from "react";
import "@/styles/components/todo.css"


export default function TodoForm() {
    const renderTask = (e: any) => {
        const newTaskInput = document.querySelector(".todo-input") as HTMLInputElement;
        if (e.key === 'Enter') {
            createTask(newTaskInput?.value);
            newTaskInput!.value = "";
        }
    };
    return (
        <>
            <h1>Todos</h1>
            <input
                className="todo-input"
                type="text"
                id="input-box"
                name="content"
                placeholder="Nhập công việc tại đây"
                autoFocus
                required
                onKeyDown={renderTask}
            />
        </>
    )
}
