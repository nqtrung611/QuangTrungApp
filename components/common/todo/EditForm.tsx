import React, { useEffect, useRef } from "react";

export default function EditForm({ task }: any) {
    // const refLabel = useRef(null);

    // useEffect(() => {
    //     if (refLabel.current) {
    //       // Thao tác với phần tử tại đây
    //       refLabel.current.style.color = 'red';
    //     }
    //   }, [refLabel]);
    return (
        <>
            {/* <form action={deleteTask}> */}
                {/* <label ref={refLabel}>{task.content}</label> */}
                <input type="text" style={{display: 'none'}}/>
            {/* </form>; */}
        </>
    )
}
