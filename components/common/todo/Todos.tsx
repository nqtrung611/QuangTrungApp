import React from "react";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actionTodo";
import CompletedForm from "./CompletedForm";


export default async function Todos () {
    const tasks = await getAllTasks();

    return (
        <>
            <div>
                <main>
                    <div className="toggle-all-container">
                    <input type="checkbox" className="toggle-all"/>
                    <label htmlFor="toggle-all" className="toggle-all-label">
                        Toggle All Input
                    </label>
                    </div>
                    <ul className="todo-list">
                        {tasks.map((task) => (
                            <li key={task.id} className="task view">
                                <CompletedForm id={task.id}/>
                                <label>{task.content}</label>
                                <input type="text" style={{display: 'none'}}/>
                                <DeleteForm id={task.id}/>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
            <footer className="footer">
                <span className="todo-count">3 items left</span>
                <div className="filters">
                    <button className="btn-option selected" value="all">All</button>
                    <button className="btn-option" value="completed">Completed</button>
                    <button className="btn-option" value="incomplete">Active</button>
                </div>
                <button type="button" className="clear-completed"> Clear Completed </button>
            </footer>
        </>
    )
}
