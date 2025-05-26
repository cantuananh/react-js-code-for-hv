function ProductList({setSelectedProduct, products}) {
    return (
        <div className="list-products">
            <h1>Danh sach products</h1>
            <ul>
                {
                    products.map((product) => (
                        <li onClick={() => setSelectedProduct(product)}
                            key={product.id}>{product.name} - Giá: {product.price}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ProductList;