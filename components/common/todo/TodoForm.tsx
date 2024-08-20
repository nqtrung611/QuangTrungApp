import { createTask } from "@/utils/actionTodo";
import React from "react";
import "@/styles/components/todo.css"

const TodoForm = () => {
    return (
        <form action={createTask}>
            <div className=" join w-full mb-8 flex">
                <input
                    type="text"
                    className="input-task input w-full px-6 py-4 rounded-3xl"
                    placeholder="Nhập task tại đây"
                    name="content"
                    // autoFocus
                    required
                />
                <button type="submit" className="btn btn-primary join-item p-4 text-nowrap">
                    Create Task
                </button>
            </div>
        </form>
    )
}

export default TodoForm;