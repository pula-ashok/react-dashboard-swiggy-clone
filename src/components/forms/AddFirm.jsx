import React from "react";
import { useState } from "react";
import { API_PATH } from "../../data/apiPath";

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [offer, setOffer] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [file, setFile] = useState(null);
  const firmHandler = async (e) => {
    e.preventDefault();
    try {
      const loginToken = JSON.parse(localStorage.getItem("logintoken"));
      if (!loginToken) {
        console.log("token not found");
      }
      const response = await fetch(`${API_PATH}/firm/add-firm`, {
        method: "POST",
        headers: { "Content-type": "application/json", token: loginToken },
        body: JSON.stringify({
          firmName,
          area,
          offer,
          category,
          region,
          image: file.name,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("firmId", JSON.stringify(data.firmId));
        alert("firm added successfully");
        setFirmName("");
        setArea("");
        setCategory([]);
        setRegion([]);
        setOffer("");
        setFile(null);
      } else if (data.error === "only one firm can add") {
        alert("we can't add more than one firm ");
      } else {
        alert("firm not added");
      }
    } catch (error) {
      console.log(error);
      alert("firm not added");
    }
  };
  const categoryChangeHandler = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };
  const regionChangeHandler = (e) => {
    const value = e.target.value;
    if (region.includes(value)) {
      setRegion(region.filter((item) => item !== value));
    } else {
      setRegion([...region, value]);
    }
  };
  const imageUploadHandler = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="firm-section">
      <form action="" className="firm-form" onSubmit={firmHandler}>
        <h2>Add Firm</h2>
        <label htmlFor="">Firm Name</label>
        <input
          type="text"
          placeholder="Enter firm name"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
        />
        <label htmlFor="">Area</label>
        <input
          type="text"
          placeholder="Enter area name"
          value={area}
          onChange={(e) => setArea(e.target.value)}
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
                checked={category.includes("veg")}
                onChange={categoryChangeHandler}
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
                onChange={categoryChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="category-container">
          <label htmlFor="">Region</label>
          <div className="input-checkbox-container region-container ">
            <div className="checkbox-container">
              <label htmlFor="">South Indian</label>
              <input
                type="checkbox"
                name=""
                id=""
                value="south-indian"
                checked={region.includes("south-indian")}
                onChange={regionChangeHandler}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">North Indian</label>
              <input
                type="checkbox"
                name=""
                id=""
                value="north-indian"
                checked={region.includes("north-indian")}
                onChange={regionChangeHandler}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">Chinese</label>
              <input
                type="checkbox"
                name=""
                id=""
                value="chinese"
                checked={region.includes("chinese")}
                onChange={regionChangeHandler}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="">Bakery</label>
              <input
                type="checkbox"
                name=""
                id=""
                value="bakery"
                checked={region.includes("bakery")}
                onChange={regionChangeHandler}
              />
            </div>
          </div>
        </div>

        {/* <label htmlFor="">Category</label>
        <input type="text" placeholder="Enter firm name" />
        <label htmlFor="">Region</label>
        <input type="text" placeholder="Enter firm name" /> */}
        <label htmlFor="">Offer</label>
        <input
          type="text"
          placeholder="Enter offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
        <label htmlFor="">Firm Image</label>
        <input type="file" onChange={imageUploadHandler} />
        <div className="btn-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
