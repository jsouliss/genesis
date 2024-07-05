import React from "react";
import "../styles/component_styles/Body.css";
import BG_Square from "../svg/BG_Square";
import BG_Portrait from "../svg/BG_Portrait";
import portrait from "../assets/body/Portrait.png";

const Body = () => {
  return (
    <div className="body">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <BG_Square />
      <div className="Portrait_Container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Portrait />
        <img className="Portrait" src={portrait} alt="Gerardo Solis Portrait" />
      </div>
    </div>
  );
};

export default Body;
