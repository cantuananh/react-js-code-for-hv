import { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
    const [items, setItems] = useState([
        {id: 1, name: "áo thun", price: 150000, quantity: 1},
        {id: 2, name: "Quần bò", price: 300000, quantity: 5},
        {id: 3, name: "Quần Baggy", price: 450000, quantity: 3},
    ]);

    const handleChangeQuantity = (id, newQuantity) => {
        setItems(
            (previos) => previos.map(
                (item) => item.id === id 
                ? {...item, quantity: newQuantity}
                : item
            )
        );
    }

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return(
        <div>
            <h1>Giỏ hàng</h1>
            {
               items.map((item) => (
                    <CartItem onChangeQuantity={handleChangeQuantity}
                     item={item} />
               )) 
            }
            <h1>Tổng tiền là: {totalPrice.toLocaleString()} đ</h1>
        </div>
    );
}

export default Cart;
    