import React from "react";
import AboutBodyComp from "../svg/AboutBody";
import AboutBodyContent from "./AboutBodyContent";
import "../styles/AboutBodyContent.css";

const AboutBody = () => {
  return (
    <div className="body-container">
      <AboutBodyComp />
      <div className={"content-wrapper"}>
        <p className={"desc-text"}>
          <AboutBodyContent />
        </p>
      </div>
    </div>
  );
};

export default AboutBody;