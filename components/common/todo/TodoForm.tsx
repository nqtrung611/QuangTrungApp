// import { createTask } from "@/utils/actionTodo";
import React from "react";
import "@/styles/components/todo.css"
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";


export default function TodoForm() {
    const createTask = async (formData: any) => {
        'use server'
        const content = formData.get("content");
        if (content.trim() === '') {
            return;
        }
        await prisma.task.create({
            data: {
                content,
            },
        });
    
        revalidatePath('/todo');
    };
    return (
        <form action={createTask}>
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
