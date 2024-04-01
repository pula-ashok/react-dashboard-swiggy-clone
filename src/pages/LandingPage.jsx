import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddFirm from "../components/forms/AddFirm";
import AddProduct from "../components/forms/AddProduct";
import { Route, Routes } from "react-router-dom";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
  };
  const showRegisterHandler = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowFirm(false);
    setShowProduct(false);
  };
  const showFirmHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowFirm(true);
    setShowProduct(false);
  };
  const showProductHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(true);
  };
  return (
    <div>
      <Navbar
        showLoginHandler={showLoginHandler}
        showRegisterHandler={showRegisterHandler}
      />
      <div className="collections-section">
        <Sidebar
          showFirmHandler={showFirmHandler}
          showProductHandler={showProductHandler}
        />
        {showLogin && <Login />}
        {showRegister && <Register />}
        {showFirm && <AddFirm />}
        {showProduct && <AddProduct />}
      </div>
    </div>
  );
};

export default LandingPage;
