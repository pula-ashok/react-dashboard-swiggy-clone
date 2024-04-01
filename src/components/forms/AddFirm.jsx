import React from "react";

const AddFirm = () => {
  return (
    <div className="firm-section">
      <form action="" className="firm-form">
        <h2>Add Firm</h2>
        <label htmlFor="">Firm Name</label>
        <input type="text" placeholder="Enter firm name" />
        <label htmlFor="">Area</label>
        <input type="text" placeholder="Enter area name" />
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
          <label htmlFor="">Region</label>
          <div className="input-checkbox-container region-container ">
            <div className="checkbox-container">
              <label htmlFor="">South Indian</label>
              <input type="checkbox" name="" id="" value="south-indian" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">North Indian</label>
              <input type="checkbox" name="" id="" value="north-indian" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">Chinese</label>
              <input type="checkbox" name="" id="" value="chinese" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">Bakery</label>
              <input type="checkbox" name="" id="" value="bakery" />
            </div>
          </div>
        </div>

        {/* <label htmlFor="">Category</label>
        <input type="text" placeholder="Enter firm name" />
        <label htmlFor="">Region</label>
        <input type="text" placeholder="Enter firm name" /> */}
        <label htmlFor="">Offer</label>
        <input type="text" placeholder="Enter offer" />
        <label htmlFor="">Firm Image</label>
        <input type="file" />
        <div className="btn-submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
