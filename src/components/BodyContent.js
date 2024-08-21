import React from "react";
import BG_Square from "../svg/BG_Square";
import BG_Square_2 from "../svg/BG_Square_2";
import "../styles/component_styles/Body.css";

const BodyContent = ({ children }) => {
  return (
    <div className="body-content">
      <div className="bg-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Square />
      </div>
      {children} {/* This will render the content passed to BodyContent */}
      <div className="bg-container-2">
        <BG_Square_2 />
      </div>
    </div>
  );
};

export default BodyContent;
