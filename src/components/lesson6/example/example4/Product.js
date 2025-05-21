import { useState } from "react";
import ProductItem from "./ProductItem";

function Product() {
    var [products, setProducts] = useState([
        {id: 1, name: "iphone", votes: 0},
        {id: 2, name: "samsung", votes: 0},
        {id: 3, name: "xiaomi", votes: 0},
        {id: 4, name: "vivo", votes: 0},
        {id: 5, name: "lg", votes: 0},
    ]);

    const handleVote = (id) => {
        setProducts(
            (previos) => previos.map(
                (product) => product.id === id
                ? {...product, votes:product.votes + 1}
                : product
            )
        );
    };

    return(
        <div>
            <h1>Bình chọn sản phẩm</h1>
            <ProductItem onVote={handleVote}
             products={products} />
        </div>
    );
}

export default Product;