import React from "react";

function DemoMouseOverAndMouseOut() {
    const handleMouseOver = () => {
        console.log("Mouse over");
    }

    const handleMouseOut = () => {
        console.log("Mouse out");
    }

    return(
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Button</div>
    );
}

export default DemoMouseOverAndMouseOut;