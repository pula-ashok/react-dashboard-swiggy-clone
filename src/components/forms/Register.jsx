import React from "react";

const Register = () => {
  return (
    <div className="register-section">
      <form action="" className="authform">
        <h3>Vendor Registration</h3>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" />
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

export default Register;
