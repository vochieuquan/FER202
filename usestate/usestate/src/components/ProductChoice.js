import React, { useState } from 'react';

function ProductChoice() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  // Chỉ chọn 1 sản phẩm, nên dùng 1 biến lưu id sản phẩm được chọn
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProduct(productId);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="radio"
            id={product.id}
            name="product" // cùng name để chỉ chọn 1
            value={product.id}
            checked={selectedProduct === product.id}
            onChange={handleRadioChange}
          />
          <label htmlFor={product.id}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && (
        <p>
          Bạn đã chọn sản phẩm: {products.find(p => p.id === selectedProduct).name}
        </p>
      )}
    </div>
  );
}

export default ProductChoice;