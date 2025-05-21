import React from "react";

function ChildComponent(props) {
    const onClick = () => {
        props.onButtonClick("Dữ liệu từ con");
    }

    return(
        <>
            <button onClick={onClick}>Click để gửi dữ liệu cho cha</button>
        </>
    );

}

export default ChildComponent;