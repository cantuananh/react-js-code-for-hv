import React from "react";
import SearchBox from "./SearchBox";

function Search() {
    const products = ["iphone", "macbook", "Ipad", "Airpod", "Imac", "Mac mini"];

    const handleSearch = (keyword) => {
        const productResult = products.filter(
            product => product.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
        );

        console.log("Ket qua tim kiem duoc la: ", productResult);
    }

    return(
        <SearchBox handleSearch={handleSearch} />
    );

}

export default Search;