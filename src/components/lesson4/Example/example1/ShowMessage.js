import React from "react";

function ShowMessage(props) {
    return(
        <>
            <h1>{props.menuInfomation.title}</h1>
            <p>{props.menuInfomation.description}</p>
            <p>{props.menuInfomation.price}</p>
            <h1>List menu item</h1>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );

}

export default ShowMessage;