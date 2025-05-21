import React from "react";

function DemoOnKeyupAndOnKeydown() {
    function handleOnKeyup(e) {
        e.preventDefault();
        console.log(e.key);
    }

    function handleOnKeydown(e) {
        e.preventDefault();
        console.log(e.key);
    }

    return(
        <>
            <input onKeyDown={handleOnKeydown} onKeyUp={handleOnKeyup}
            placeholder="Type anything..." />
        </>
    );
}

export default DemoOnKeyupAndOnKeydown;