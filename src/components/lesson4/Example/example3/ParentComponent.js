import React from "react";
import ChildComponent from "./ChilComponent";

function ParentComponent() {
    const handleDataFromChild = (data) => {
        console.log('Dữ liệu được nhận từ con:', data);
        alert(`Cha nhận được: ${data}`)
    }

    return(
        <>
            <h1>Components cha</h1>
            <ChildComponent onButtonClick={handleDataFromChild} />
        </>
    );

}

export default ParentComponent;