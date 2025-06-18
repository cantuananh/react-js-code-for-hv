import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function ProductAdd() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {   
            await axios.post("http://localhost:3001/products", {
                id: uuidv4(),
                ...product
            })

            navigate("/products")
        } catch (error) {
            console.error("Error when call API", error);
        }
    }


    return (
        <div>
            <h1 className="text-center">Form create new product</h1>
            <Form style={{width: "60%", margin: "0 auto"}} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Type name..." name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" placeholder="Type price..." name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type description" name="description" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form>
        </div>
    );
}