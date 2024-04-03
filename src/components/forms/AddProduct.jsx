import React, { useState } from "react";
import { API_PATH } from "../../data/apiPath";

const AddProduct = () => {
  const [bestseller, setBestseller] = useState(false);
  const [category, setCategory] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const sellerHanlder = (e) => {
    const value = e.target.value === "true";
    setBestseller(value);
  };
  const categroyHandler = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };
  const productHandler = async (e) => {
    e.preventDefault();
    try {
      const loginToken = JSON.parse(localStorage.getItem("logintoken"));
      const firmId = JSON.parse(localStorage.getItem("firmId"));
      if (!loginToken || !firmId) {
        alert("not authorized");
        console.log("not authorized");
      }
      const response = await fetch(
        `${API_PATH}/product/add-product/${firmId}`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            productName,
            price,
            category,
            description,
            bestseller,
            image: file,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("product added successfully");
        setProductName("");
        setPrice("");
        setCategory([]);
        setBestseller("");
        setDescription("");
      }
    } catch (error) {
      console.log(error);
      alert("product not added");
    }
  };
  const imageUploadHandler = (e) => {
    const image = e.target.files[0];
    setFile(image);
  };
  return (
    <div className="product-section">
      <form action="" className="product-form" onSubmit={productHandler}>
        <h2>Add Product</h2>
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          placeholder="Enter Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="">Price</label>
        <input
          type="text"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="category-container">
          <label htmlFor="">Category</label>
          <div className="input-checkbox-container">
            <div className="checkbox-container">
              <label htmlFor="">Veg</label>
              <input
                type="checkbox"
                name=""
                id=""
                value="veg"
                onChange={categroyHandler}
                checked={category.includes("veg")}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">Non Veg</label>
              <input
                type="checkbox"
                name=""
                id=""
                value="non-veg"
                checked={category.includes("non-veg")}
                onChange={categroyHandler}
              />
            </div>
          </div>
        </div>
        <div className="category-container">
          <label htmlFor="">Best Seller</label>
          <div className="input-checkbox-container">
            <div className="checkbox-container">
              <label htmlFor="">Yes</label>
              <input
                type="radio"
                name="seller"
                id=""
                value={true}
                onChange={sellerHanlder}
                checked={bestseller === true}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">No</label>
              <input
                type="radio"
                name="seller"
                id=""
                value={false}
                onChange={sellerHanlder}
                checked={bestseller === false}
              />
            </div>
          </div>
        </div>

        {/* <label htmlFor="">Category</label>
        <input type="text" placeholder="Enter Product name" />
        <label htmlFor="">Best Seller</label>
        <input type="text" placeholder="Enter Product name" /> */}
        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="">Product Image</label>
        <input type="file" />
        <div className="btn-submit">
          <button type="submit" onChange={imageUploadHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
