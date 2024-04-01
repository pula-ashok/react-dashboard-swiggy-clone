import React from "react";

const Login = () => {
  return (
    <div className="login-section">
      <form action="" className="authform">
        <h3>Vendor Login</h3>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
        <div className="btn-submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
