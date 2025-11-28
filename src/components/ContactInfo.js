import React from "react";
import "../styles/FooterLinks.css";

const ContactInfo = ({ icon, text, href, isLink, newTab = true }) => {
  function handleEmailClick(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="horizontal-align">
      <img
        src={icon}
        alt={`${text} Icon`}
        className={`${text.toLowerCase()}-icon`}
      />
      {isLink ? (
        <a
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={`${text.toLowerCase()}-link`}
        >
          {text}
        </a>
      ) : (
        <span className={"email-text"} onClick={() => handleEmailClick(text)}>
          {text}
        </span>
      )}
    </div>
  );
};

export default ContactInfo;
