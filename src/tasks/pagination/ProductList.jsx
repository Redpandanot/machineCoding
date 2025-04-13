import React from "react";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <div className="image-container" key={product.id}>
            <img
              className="product-images"
              src={product.images[0]}
              alt={product.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
