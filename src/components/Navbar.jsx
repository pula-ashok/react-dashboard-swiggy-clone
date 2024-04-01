import React from "react";

const Navbar = ({ showLoginHandler, showRegisterHandler }) => {
  return (
    <section className="navsection">
      <div className="company">Vendor Dashboard</div>
      <div className="useauth">
        <span onClick={() => showLoginHandler()} style={{ cursor: "pointer" }}>
          Login/
        </span>
        <span
          onClick={() => showRegisterHandler()}
          style={{ cursor: "pointer" }}
        >
          Register
        </span>
      </div>
    </section>
  );
};

export default Navbar;
