import React from "react";
import Child from "./Child";

function Parent() {
    const handleClick = () => {
        alert("Child button clicked")
    }

    return(
        <>
            <h1>Parent components</h1>
            <Child handleClick={handleClick} />
        </>
    );


}

export default Parent;