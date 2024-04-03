import React, { useEffect, useState } from "react";
import { API_PATH } from "../data/apiPath";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  const fetchAllProducts = async () => {
    try {
      const firmId = JSON.parse(localStorage.getItem("firmId"));
      const response = await fetch(`${API_PATH}/product/${firmId}/products`);
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setProducts(data.products);
        setRestaurantName(data.restaurantName);
      }
    } catch (error) {
      console.log(error);
      alert("getting error while fetching products");
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  const deleteProductById = async (productId) => {
    try {
      const response = await fetch(`${API_PATH}/product/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProducts(products.filter((product) => product._id !== productId));
        confirm("are you sure, you want to delete?");
        alert("Product deleted Successfully");
      }
    } catch (error) {
      alert("failed to delete the product");
    }
  };
  return (
    <div>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <table className="table-products">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>
                  {item.image && (
                    <img
                      src={`${API_PATH / uploads}/${item.image}`}
                      alt={item.productName}
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => deleteProductById(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllProducts;
