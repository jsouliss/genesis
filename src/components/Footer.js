import React from "react";
import "../styles/component_styles/Footer.css";
import { ReactComponent as FooterBox } from "../assets/footer/Footer.svg";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer-container">
        <FooterBox />
      </footer>
    </div>
  );
};

export default Footer;
