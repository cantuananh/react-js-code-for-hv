import React from "react";
import CountrySelector from "./CountrySelector";

function Select() {
    const handleSelectCountry = (code) => {
        const greeting = {
            VN: "Xin chào!",
            US: "Hello!",
            JP: "Kon ni chi wa!"
        }

        console.log(greeting[code]);
    }

    return(
        <CountrySelector handleSelectCountry={handleSelectCountry} />
    );
}

export default Select;