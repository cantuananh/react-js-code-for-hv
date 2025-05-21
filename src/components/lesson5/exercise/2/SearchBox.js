import React from "react";

function SearchBox({handleSearch}) {
    return <input placeholder="Nhap ten san pham..."
     onChange={(e) => handleSearch(e.target.value)}></input>
}

export default SearchBox;