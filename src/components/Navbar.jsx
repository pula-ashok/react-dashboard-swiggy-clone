import React, { useEffect } from "react";

const Navbar = ({
  showLoginHandler,
  showRegisterHandler,
  showLogout,
  showLogoutHandler,
}) => {
  let firmName = JSON.parse(localStorage.getItem("firmName"));

  console.log("first");
  console.log(firmName);
  return (
    <section className="navsection">
      <div className="company">Vendor Dashboard</div>
      {firmName && <div className="firmName">firmName : {firmName}</div>}
      <div className="useauth">
        {showLogout ? (
          <span onClick={() => showLogoutHandler()}>Logout</span>
        ) : (
          <>
            <span
              onClick={() => showLoginHandler()}
              style={{ cursor: "pointer" }}
            >
              Login/
            </span>
            <span
              onClick={() => showRegisterHandler()}
              style={{ cursor: "pointer" }}
            >
              Register
            </span>
          </>
        )}
      </div>
    </section>
  );
};

export default Navbar;
