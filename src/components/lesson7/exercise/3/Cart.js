import { useState } from "react";

function Cart() {
    const [products, setProducts] = useState([
        { id: 1, name: "Sản phẩm A", quantity: 1 },
        { id: 2, name: "Sản phẩm B", quantity: 6 },
        { id: 3, name: "Sản phẩm C", quantity: 2 },
        { id: 4, name: "Sản phẩm D", quantity: 1 },
        { id: 5, name: "Sản phẩm E", quantity: 3 },
    ]);

    const handleUpdateQuantity = (id, delta) => {
        setProducts(
            (prev) => prev.map(
                item => item.id === id
                    ? { ...item, quantity: item.quantity + delta }
                    : item
            )
        );
    }

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <span>{product.name} - Số lượng: {product.quantity}</span>
                        <button onClick={() => handleUpdateQuantity(product.id, -1)}
                            style={{ marginLeft: "5px", marginBottom: "5px" }}
                            disabled={product.quantity === 0}
                            >-</button>
                        <button onClick={() => handleUpdateQuantity(product.id, 1)}
                            style={{ marginLeft: "5px", marginBottom: "5px" }}>+</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Cart;