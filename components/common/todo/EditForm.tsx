import React from "react";

export default function EditForm({ id }: any) {
    return (
        <>
            {/* <form action={deleteTask}> */}
                <input type="hidden" name="id" value={id} />
                <button className="delete">X</button>
            {/* </form>; */}
        </>
    )
}
