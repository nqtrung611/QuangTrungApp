// import { createTask } from "@/utils/actionTodo";
import React from "react";
import "@/styles/components/todo.css"

export default function TodoForm() {
    return (
        // <form action={createTask}>
        <form>
            <h1>Todos</h1>
            <input
                className="todo-input"
                type="text"
                id="input-box"
                name="content"
                placeholder="Nhập công việc tại đây"
                autoFocus
                required
            />
        </form>
    )
}
