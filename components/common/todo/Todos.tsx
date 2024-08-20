import React from "react";
import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actionTodo";

const Todos = async () => {
    const tasks = await getAllTasks();
    
    if (tasks.length === 0) {
        return <h2 className="mt-8 font-medium text-lg">Không có task hiển thị</h2>
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
                    <img
                        className="w-8 h-8 absolute"
                        src={`/images/${task.completed ? 'checked1.png' : 'unchecked.png'}`}
                        alt=""
                    />
                    <h2
                        className={`ml-11 text-lg capitalize ${
                            task.completed ? 'line-through' : null
                        }`}
                    >
                        {task.content}
                    </h2>
                    <div className="flex gap-6 items-center">
                        <Link href={`/todo/${task.id}`}>Edit</Link>
                        <DeleteForm id={task.id}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Todos;