import React from "react";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actionTodo";
import Image from "next/image";

const Todos = async () => {
    const tasks = await getAllTasks();
    
    if (tasks.length === 0) {
        return <h2 className="mt-8 font-medium text-lg">Không có task hiển thị</h2>
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
                    <Image
                        className="w-8 h-8 absolute"
                        width={32}
                        height={32}
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
                        <a>Edit</a>
                        <DeleteForm id={task.id}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Todos;