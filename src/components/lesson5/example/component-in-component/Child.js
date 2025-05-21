import React from "react";

function Child({ handleClick }) {
    return(
        <button onClick={handleClick}>Click me!</button>
    );

}

export default Child;