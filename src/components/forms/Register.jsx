import React, { useState } from "react";
import { API_PATH } from "./../../data/apiPath";

const Register = ({ showLoginHandler }) => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const registerHandler = async (e) => {
    console.log(registerData);
    e.preventDefault();
    try {
      const response = await fetch(`${API_PATH}/vendor/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("registerd successfully");
        console.log(data);
        setRegisterData({
          username: "",
          email: "",
          password: "",
        });
        showLoginHandler();
      }
    } catch (error) {
      console.log(error);
      alert("registration failed");
    }
  };
  return (
    <div className="register-section">
      <form action="" className="authform" onSubmit={registerHandler}>
        <h3>Vendor Registration</h3>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={registerData.username}
          onChange={(e) =>
            setRegisterData({ ...registerData, username: e.target.value })
          }
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
        />
        <div className="btn-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
