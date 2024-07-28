import React from "react";
import "../styles/component_styles/Body.css";
import BG_Portrait from "../svg/BG_Portrait";
import BG_Square from "../svg/BG_Square";
import portrait from "../assets/body/Portrait.png";

const Body = () => {
  return (
    <div className="body">
      <div className="bg-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Square />
        <div className="portrait-container">
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <BG_Portrait />
          <img
            className="portrait-img"
            src={portrait}
            alt={"Gerardo Solis Portrait"}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
