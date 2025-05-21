import React from "react";

function DemoFocusAndBlur() {
    const handleOnFocus = () => {
        console.log("Focus input");

    }

    const handleOnBlur = () => {
        console.log("Blur input");

    }

    return(
        <>
            <input onFocus={handleOnFocus} 
            onBlur={handleOnBlur} 
            placeholder="Type anything..." />
        </>
    );
}

export default DemoFocusAndBlur;