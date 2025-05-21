import React from "react";

function DemoOnSubmit() {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        alert("From submited")
    }

    return(
        <>
            <form onSubmit={handleSubmitForm}>
                <input type="text" placeholder="Type anything..." />
                <button>Submit form</button>
            </form>
        </>
    );
}

export default DemoOnSubmit;