import React from "react";

function Example2() {
    function getGreeting(user){
        if(user){
            return <h1>Xin chao {formatName(user)}</h1>
        } else {
            return <h1>Xin chao nguoi la</h1>
        }
    }

    const user = {
        fistName: "Tuan",
        lastName: "Anh"
    };

    function formatName(user) {
        return user.fistName + ' ' + user.lastName;
    };

    const user1 = getGreeting(user);
    const user2 = getGreeting(null);

    return(
        <>
            {user1}
            {user2}
        </>
    );

}

export default Example2;