import React from "react";

export default function Products({ products, addToCart }) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}