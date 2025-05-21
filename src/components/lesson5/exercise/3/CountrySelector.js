import React from "react";

function CountrySelector({handleSelectCountry}) {
    return(
        <select onChange={(e) => handleSelectCountry(e.target.value)} >
            <option value={null}>Mời chọn quốc gia</option>
            <option value={"VN"}>Việt Nam</option>
            <option value={"US"}>Mỹ</option>
            <option value={"JP"}>Nhật bản</option>
        </select>
    );
}

export default CountrySelector;