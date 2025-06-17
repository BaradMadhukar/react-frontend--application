import React, { useEffect, useState } from "react";
import 
import axios from "axios";
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-list-container">
      <h2>📦 Product List</h2>
      {products.length === 0 ? (
        <p className="no-products">No products found.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
                <td>{prod.catregory}</td> {/* typo? Should this be prod.category? */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
