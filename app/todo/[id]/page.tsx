import EditForm from "@/components/common/todo/EditForm";
import { getTask } from "@/utils/actionTodo";
import Link from "next/link";
import React from "react";

const DetailPage = async ({ params }: any) => {
    const task = await getTask(params.id);
    return (
        <>
            <div className="mb-16">
                <Link href='/todo' className="btn btn-accent">Back</Link>
            </div>
            <EditForm task={task}/>
        </>
    );
};

export default DetailPage;
