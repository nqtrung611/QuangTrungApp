import React from "react";
// import PageTodo from "@/components/common/todo/todo";
import TodoForm from "@/components/common/todo/TodoForm";
import Todos from "@/components/common/todo/Todos";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Todo List",
    description: "Generated by create next app",
};

export default function Page() {
    return (
        <div className="todo-app relative mt-32 mb-10 mx-0">
            <header>
                <TodoForm/>
            </header>
            <Todos/>
        </div>
    );
}
