import React from "react";
import logo from "../../assets/newspaper.png";
import "./Nav.css";
import HamburgerDrawer from "../HamburgerDrawer";

const Nav = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img src={logo} alt="logo" />
      <h2>News Buzz</h2>
    </div>
  );
};

export default Nav;
