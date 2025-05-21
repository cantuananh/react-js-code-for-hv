import React from "react";

function DemoOnDoubleClickEvent() {
    const handleDoubleClick = (e) => {
        e.preventDefault();
        console.log("Doubel click!");
    }

    return(
        <>
            <button onDoubleClick={handleDoubleClick}>Double click!</button>
        </>
    );
}

export default DemoOnDoubleClickEvent;