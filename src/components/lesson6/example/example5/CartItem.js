function CartItem({item, onChangeQuantity}) {
    return(
        <div>
            {item.name} - Giá: {item.price}
            <input style={{marginLeft: "5px"}}
            type="number"
            onChange={(e) => onChangeQuantity(item.id, parseInt(e.target.value))}
            value={item.quantity}>
            </input>
        </div>
    );
}

export default CartItem;