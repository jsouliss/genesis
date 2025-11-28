import React from "react";
import "../styles/FooterLinks.css";

const FooterLinks = ({ href, icon, altText, linkText }) => {
  return (
    <div className={`horizontal-align`}>
      <img
        src={icon}
        alt={altText}
        className={`${altText.toLowerCase()}-icon`}
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${altText.toLowerCase()}-link`}
      >
        {linkText}
      </a>
    </div>
  );
};

export default FooterLinks;
