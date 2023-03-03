import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white fixed-bottom" style={{ backgroundColor: "#F50057" }}>
        <div className="container p-0"></div>

        <div className="text-center p-1" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          © 2023 Copyright:
          <NavLink className="text-white" to="https://mdbootstrap.com/">
            MDBootstrap.com
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
