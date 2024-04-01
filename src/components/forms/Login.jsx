import React, { useState } from "react";
import { API_PATH } from "../../data/apiPath";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_PATH}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("login success");
        console.log(data);
        localStorage.setItem("logintoken", JSON.stringify(data.token));
        setLoginData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      alert("login failed");
      console.log(error);
    }
  };
  return (
    <div className="login-section">
      <form action="" className="authform" onSubmit={loginHandler}>
        <h3>Vendor Login</h3>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <div className="btn-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
