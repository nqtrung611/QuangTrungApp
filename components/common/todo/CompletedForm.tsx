import { completedTask, getTask } from "@/utils/actionTodo";
import React from "react";
import Image from "next/image";

export default async function CompletedForm({ id }: any) {
    const task = await getTask(id);
    return (
        <>
            <form action={completedTask}>
                <input type="hidden" name="id" value={id} />
                <button>
                    <Image
                        width={32}
                        height={32}
                        src={`/images/${task!.completed ? 'checked1.png' : 'unchecked.png'}`}
                        alt=""
                    />
                </button>
            </form>
        </>
    )
}
