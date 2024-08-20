import React from "react";
import "../styles/component_styles/Footer.css";
import FooterBlock from "../svg/FooterBlock";
import Pdf from "../assets/docs/Gerardo-Solis-Resume.pdf";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer-container">
        <div className="footer-block-container">
          <div className="footer-block-1">
            <div className="footer-content">
              <text>Certifications</text>
              <a href={Pdf} target="_blank" className="resume-link">
                Resume
              </a>
              <text>gsolis5114@gmail.com</text>
            </div>
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
