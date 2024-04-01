import React from "react";

const AddProduct = () => {
  return (
    <div className="product-section">
      <form action="" className="product-form">
        <h2>Add Product</h2>
        <label htmlFor="">Product Name</label>
        <input type="text" placeholder="Enter Product name" />
        <label htmlFor="">Price</label>
        <input type="text" placeholder="Enter Price" />
        <div className="category-container">
          <label htmlFor="">Category</label>
          <div className="input-checkbox-container">
            <div className="checkbox-container">
              <label htmlFor="">Veg</label>
              <input type="checkbox" name="" id="" value="Veg" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">Non Veg</label>
              <input type="checkbox" name="" id="" value="Non-veg" />
            </div>
          </div>
        </div>
        <div className="category-container">
          <label htmlFor="">Best Seller</label>
          <div className="input-checkbox-container">
            <div className="checkbox-container">
              <label htmlFor="">Yes</label>
              <input type="checkbox" name="" id="" value="Yes" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">No</label>
              <input type="checkbox" name="" id="" value="No" />
            </div>
          </div>
        </div>

        {/* <label htmlFor="">Category</label>
        <input type="text" placeholder="Enter Product name" />
        <label htmlFor="">Best Seller</label>
        <input type="text" placeholder="Enter Product name" /> */}
        <label htmlFor="">Description</label>
        <input type="text" placeholder="Enter Description" />
        <label htmlFor="">Product Image</label>
        <input type="file" />
        <div className="btn-submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
