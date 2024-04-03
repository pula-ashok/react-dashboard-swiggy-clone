import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddFirm from "../components/forms/AddFirm";
import AddProduct from "../components/forms/AddProduct";
import { Route, Routes } from "react-router-dom";
import Welcome from "../components/Welcome";
import AllProducts from "../components/AllProducts";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showFirmTitle, setShowFirmTitle] = useState(true);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("logintoken"));
    if (token) {
      setShowLogout(true);
    }
  }, []);
  useEffect(() => {
    const firmName = JSON.parse(localStorage.getItem("firmName"));
    if (firmName) {
      setShowFirmTitle(false);
    }
  }, []);
  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowWelcome(false);
    setShowProduct(false);
    setShowAllProducts(false);
  };
  const showRegisterHandler = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowFirm(false);
    setShowWelcome(false);
    setShowAllProducts(false);
    setShowProduct(false);
  };
  const showFirmHandler = () => {
    if (showLogout) {
      setShowLogin(false);
      setShowRegister(false);
      setShowFirm(true);
      setShowWelcome(false);
      setShowAllProducts(false);
      setShowProduct(false);
    } else {
      alert("please login");
      setShowLogin(true);
    }
  };
  const showProductHandler = () => {
    if (showLogout) {
      setShowLogin(false);
      setShowRegister(false);
      setShowFirm(false);
      setShowProduct(true);
      setShowAllProducts(false);
      setShowWelcome(false);
    } else {
      alert("please login");
      setShowLogin(true);
    }
  };
  const showWelcomeHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowAllProducts(false);
    setShowWelcome(true);
  };
  const showAllProductsHandler = () => {
    if (showLogout) {
      setShowLogin(false);
      setShowRegister(false);
      setShowFirm(false);
      setShowProduct(false);
      setShowAllProducts(true);
      setShowWelcome(false);
    } else {
      alert("please login");
      setShowLogin(true);
    }
  };
  const showLogoutHandler = () => {
    confirm("are you want logout?");
    localStorage.removeItem("logintoken");
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogout(false);
    setShowFirmTitle(true);
  };
  return (
    <div>
      <Navbar
        showLoginHandler={showLoginHandler}
        showRegisterHandler={showRegisterHandler}
        showLogout={showLogout}
        setShowLogout={setShowLogout}
        showLogoutHandler={showLogoutHandler}
        showWelcomeHandler={showWelcomeHandler}
      />
      <div className="collections-section">
        <Sidebar
          showFirmHandler={showFirmHandler}
          showProductHandler={showProductHandler}
          showAllProductsHandler={showAllProductsHandler}
          showFirmTitle={showFirmTitle}
        />
        {showLogin && (
          <Login
            showWelcomeHandler={showWelcomeHandler}
            setShowLogout={setShowLogout}
            showFirmTitle={showFirmTitle}
          />
        )}
        {showRegister && <Register showLoginHandler={showLoginHandler} />}
        {showFirm && showLogout && <AddFirm />}
        {showProduct && showLogout && <AddProduct />}
        {showWelcome && <Welcome />}
        {showAllProducts && showLogout && <AllProducts />}
      </div>
    </div>
  );
};

export default LandingPage;
