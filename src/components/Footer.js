import React from "react";
import "../styles/component_styles/Footer.css";
import FooterBlock from "../svg/FooterBlock";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer-container">
        <div className="footer-block-container">
          <div className="footer-block">
            <FooterBlock />
          </div>
          <div className="footer-block">
            <FooterBlock />
          </div>
          <div className="footer-block">
            <FooterBlock />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
