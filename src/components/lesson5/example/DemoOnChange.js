import React from "react";

function DemoOnChange() {
    const handleOnChange = (e) => {
        e.preventDefault();
        console.log("Name type is: ",e.target.value);
    }

    return(
        <input onChange={handleOnChange}
         placeholder="Type anything..."></input>
    );
}

export default DemoOnChange;