function SelectedProduct({ selectedProduct, disCountPrice }) {
    return (
        <div>
            {
                selectedProduct && (
                    <div>
                        <h2>Thong tin san pham</h2>
                        <p>Ten: {selectedProduct.name}</p>
                        <p>Gia goc: {selectedProduct.price}$</p>
                        <p>Gia sale: {disCountPrice ? `${disCountPrice}$` : "Dang tinh..."}</p>
                    </div>
                )
            }
        </div>
    );
}

export default SelectedProduct;