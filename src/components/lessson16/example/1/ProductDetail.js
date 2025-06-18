import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Error when call API", error);
            }
        }

        fetchProduct();
    }, [id]);

    if(!product) return <p>NOt found product or loading...</p>
    
    return(
        <div>
            <h2>Product detail</h2>
            <p>Name: {product.name}</p>
            <p>Name: {product.price}</p>
            <p>Name: {product.description}</p>
        </div>
    );
}