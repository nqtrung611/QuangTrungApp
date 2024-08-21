import prisma from "@/utils/db";
import React, { useEffect } from "react";

const getAllTasks = async () => {
    // await prisma.task.create({
    //     data: {
    //         content: 'Buy PC',
    //     },
    // });

    // await prisma.task.update({
    //     where: {
    //         id: "6c46a9d0-afe4-4831-ae08-c29f83cc345b",
    //     },
    //     data: {
    //         content: "Buy PC completed",
    //     },
    // });

    // await prisma.task.delete({
    //     where: {
    //         id: "6c46a9d0-afe4-4831-ae08-c29f83cc345b",
    //     },
    // });

    const allTasks = await prisma.task.findMany();
    return allTasks;
};

export default async function PagePrisma() {
    const tasks = await getAllTasks();
    // console.log(tasks);
    // console.log('Component mounted');
    return (
        <>
            <div>
                <h1 className="text-3xl text-center">PagePrisma</h1>
                {tasks.map((task) => (
                    <h1 key={task.id} className="text-xl py-2">
                        {task.content}
                    </h1>
                ))}
            </div>
            {/* {console.log(tasks)} */}
        </>
    );
}
