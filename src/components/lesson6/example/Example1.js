import { useState } from "react";

function Example1() {
    const [header, setHeader] = useState("This is header...");
    const [content, setContent] = useState("This is content...");

    return(
        <div>
            <h1>{header}</h1>
            <button onClick={()=> setHeader("Header changed!")}>Change header</button>
            <p>{content}</p>
            <button onClick={()=> setContent("Content changed!")}>Change content</button>
        </div>
    );
}

export default Example1;