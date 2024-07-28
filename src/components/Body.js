import React from "react";
import "../styles/component_styles/Body.css";
import BG_Portrait from "../svg/BG_Portrait";
import BG_Square from "../svg/BG_Square";
import portrait from "../assets/body/Portrait.png";
import { ReactComponent as Name_Tag } from "../assets/body/Name_Tag.svg";

const Body = () => {
  return (
    <div className="body">
      <div className="bg-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Square />
      </div>
      <div className="portrait-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Portrait />
        <img
          className="portrait-img"
          src={portrait}
          alt={"Gerardo Solis Portrait"}
        />
      </div>
      <div className="name-tag">
        <Name_Tag />
        <div className="name-tag-content">
          <div className="name-tag-text">Gerardo Solis</div>
          <div className="name-tag-subtext">
            Software Engineering | Offensive Security | Game Development
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
