'use client'
// import { createTask } from "@/utils/actionTodo";
import React, { KeyboardEvent, useRef } from "react";
import "@/styles/components/todo.css";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";


export default function TodoForm() {
    // const createTask = async (text: any) => {
    //     const content = text;
    //     if (content?.trim() === '') {
    //         // formData.reset();
    //         // console.log(formData);
    //         return;
    //     }
    //     await prisma.task.create({
    //         data: {
    //             content,
    //         },
    //     });
    
    //     // revalidatePath('/todo');
    // };

    const refInput = useRef<HTMLInputElement | null>(null);
    const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            console.log(typeof refInput.current?.value);
            // const content =refInput.current?.value;
            await prisma.task.create({
                data: {
                    content: 'trung',
                },
            });
        }
      };
    return (
        <>
            {/* <form action={createTask}> */}
                <h1>Todos</h1>
                <input
                    className="todo-input"
                    type="text"
                    id="input-box"
                    name="content"
                    placeholder="Nhập công việc tại đây"
                    autoFocus
                    required
                    ref={refInput}
                    onKeyDown={handleKeyPress}
                />
            {/* </form> */}
        </>
    )
}
