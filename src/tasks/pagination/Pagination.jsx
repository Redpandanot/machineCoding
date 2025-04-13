import React, { useEffect, useState } from "react";
import "./Pagination.css";
import ProductsList from "./ProductList";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const result = await fetch("https://dummyjson.com/products?limit=100");
      const data = await result.json();
      const products = data.products;
      setProducts(products);
      setPages(Math.ceil(products.length / 10));
    } catch {
      window.alert("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return loading ? (
    <div>....Loading</div>
  ) : (
    <div className="products-container">
      <ProductsList
        products={products.slice(
          index * 10,
          Math.min(index * 10 + 10, products.length)
        )}
        index={index}
      />

      <div className="buttons">
        {index > 0 && (
          <button onClick={() => setIndex(() => index - 1)}>Prev</button>
        )}
        {Array.from({ length: pages - 1 }, (_, index) => index + 1).map(
          (pageNumber) => {
            return (
              <button
                className={index === pageNumber - 1 ? "active" : ""}
                onClick={() => setIndex(pageNumber - 1)}
                key={pageNumber}
              >
                {pageNumber}
              </button>
            );
          }
        )}
        ...
        <button
          className={index === pages - 1 ? "active" : ""}
          onClick={() => setIndex(pages - 1)}
        >
          {pages}
        </button>
        {index < pages - 1 && (
          <button onClick={() => setIndex(() => index + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
