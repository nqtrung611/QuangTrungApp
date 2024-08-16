import React from "react";
import '@/styles/components/todo.css'

const PageTodo = () => {
    return (
        <>
            <div>PageTodo</div>
            <div className="todo-app">
                <div className="todo-content">
                    <div className="todo-header">
                        <h1 >Todos</h1>
                        <input className="todo-input" type="text" id="input-box" placeholder="Nhập công việc tại đây" autoFocus></input>
                    </div>
                    <div className="todo-main">
                        <div className="toggle-all-container">
                            <input type="checkbox" className="toggle-all"/>
                            <label htmlFor="toggle-all" className="toggle-all-label">
                                Toggle All Input
                            </label>
                        </div>
                        <ul className="todo-list">
                            <li className="task view">
                                <img alt=""/>
                                <label>0</label>
                                <button className="delete">X</button>
                            </li>
                            <li className="task view completed">
                                <img alt=""/>
                                <label>1</label>
                                <button className="delete">X</button>
                            </li>
                            <li className="task view">
                                <img alt=""/>
                                <label>2</label>
                                <button className="delete">X</button>
                            </li>
                            <li className="task view completed">
                                <img alt=""/>
                                <label>3</label>
                                <button className="delete">X</button>
                            </li>
                        </ul>
                    </div>
                    <div className="todo-footer">
                        <span className="todo-count">3 items left</span>
                        <div className="filters">
                            <button className="btn-option selected" value="all">All</button>
                            <button className="btn-option" value="completed">Completed</button>
                            <button className="btn-option" value="incomplete">Active</button>
                        </div>
                        <button type="button" className="clear-completed"> Clear Completed </button>
                    </div>
                </div>
            </div>
            <div>
                {/* <TodoForm/> */}
                {/* <Todos/> */}
            </div>
        </>
    );
}

export default PageTodo;
