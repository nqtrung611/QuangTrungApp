// import { deleteTask } from "@/utils/actionTodo";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";

export default function DeleteForm({ id }: any) {
    const deleteTask = async (formData: any) => {
        'use server'
        const id = formData.get("id");
        await prisma.task.delete({
            where: { id },
        });
    
        revalidatePath('/todo');
    };
    return <form action={deleteTask}>
        <input type="hidden" name="id" value={id} />
        <button className="delete">X</button>
    </form>;
}
