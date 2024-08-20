import { editTask } from "@/utils/actionTodo";
import React from "react";

const EditForm = ({ task }: any) => {
    console.log(task);
    const { id, content, completed } = task;
    return (
        <form
            action={editTask}
            className="max-w-sm p-12 border border-base-300 rounded-md"
        >
            <input type="hidden" name="id" value={id}/>
            <input
                type="text"
                name="content"
                defaultValue={content}
                required
                className="input input-border w-full"
            />
            <div className="form-control my-4">
                <label htmlFor="completed" className="label cursor-pointer">
                    <span className="label-text">Completed</span>
                    <input
                        type="checkbox"
                        defaultChecked={completed}
                        id="completed"
                        name="completed"
                        className="checkbox-primary checkbox checkbox-sm"
                    />
                </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-sm">
                Edit
            </button>
        </form>
    );
};

export default EditForm;