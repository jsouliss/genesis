import React from "react";
import "../styles/ContactInfo.css";

const ContactInfo = ({ icon, text, href, isLink }) => {
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
          target="_blank"
          rel="noopener noreferrer"
          className={`${text.toLowerCase()}-link`}
        >
          {text}
        </a>
      ) : (
        <span className={"email-text"}>{text}</span>
      )}
    </div>
  );
};

export default ContactInfo;
