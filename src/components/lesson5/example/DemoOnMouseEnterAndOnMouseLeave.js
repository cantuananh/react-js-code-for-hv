import React from "react";

function DemoOnMouseEnterAndOnMouseLeave() {
    const handleMouseEnter = () => {
        console.log("Mouse enter");
    }

    const handleMouseLeave = () => {
        console.log("Mouse leave");
    }

    return(
        <div onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >Hover over me</div>
    );
}

export default DemoOnMouseEnterAndOnMouseLeave;