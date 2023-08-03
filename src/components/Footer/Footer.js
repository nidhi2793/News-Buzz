import React from "react";
import "./Footer.css";
import logo from "../../assets/newspaper.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <img src={logo} style={{ height: 50 }} alt="logo" />
        <span className="name">News Buzz</span>
        <span style={{ fontSize: 16 }}>
          Follow us for all the important buzz around.
        </span>
      </div>

      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <TwitterIcon style={{ cursor: "pointer" }} />
        <LinkedInIcon style={{ cursor: "pointer" }} />
        <FacebookIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Footer;
