import React from "react";

function Example3() {
    const elementJSX = (
        <h1 className="greeting">Hello world</h1>
    );

    const reactCreateElement = React.createElement(
        'h1',
        {className: 'greeting'},
        "Hello world"
    );

    return(
        <>
            {elementJSX}
        </>
    );
}

export default Example3;