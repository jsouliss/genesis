import React from "react";
import "../styles/component_styles/Footer.css";
import FooterBlock from "../svg/FooterBlock";
import Pdf from "../assets/docs/Gerardo-Solis-Resume.pdf";
import fileIcon from "../assets/footer/file.png";
import mentionIcon from "../assets/footer/mention.png";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer-container">
        <div className="footer-block-container">
          <div className="footer-block-1">
            <div className="footer-content">
              <div className="horizontal-align">
                <img src={fileIcon} alt="CertIcon" className="cert-icon" />
                <a href="" target="_blank" className="cert-link">
                  Certifications
                </a>
              </div>
              <div className="horizontal-align">
                <img src={fileIcon} alt="Resume Icon" className="resume-icon" />
                <a href={Pdf} target="_blank" className="resume-link">
                  Resume
                </a>
              </div>
              <div className="horizontal-align">
                <img
                  src={mentionIcon}
                  alt="Mention Icon"
                  className="mention-icon"
                />
                <text>gsolis5114@gmail.com</text>
              </div>
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
