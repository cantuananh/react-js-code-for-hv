import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


export default function Product() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error when call API", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    const handleDelete = async (id) => {
        if (window.confirm("You are sure delete this product?")) {
            try {
                await axios.delete(`http://localhost:3001/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.error("Error when call API", error);
            }
        }
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>List product</h1>

            <Link to="add">
                <button style={{marginBottom: "10px"}}>Add new product +</button>
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={`/products/${product.id}`}><button>View</button></Link> {" "}
                                    <Link to={`/products/edit/${product.id}`}><button>Edit</button></Link> {" "}
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}