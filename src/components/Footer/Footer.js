import React from "react";
import "./Footer.css";
import logo from "../../assets/newspaper.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} style={{ height: 50 }} alt="logo" />
        <span className="name">News Buzz</span>
      </div>

      <span style={{ fontSize: 16 }}>
        Follow us for all the important buzz around.
      </span>
    </div>
  );
};

export default Footer;
