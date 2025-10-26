import React from "react";
import BG_Portrait from "../svg/BG_Portrait";
import { ReactComponent as Name_Tag } from "../assets/body/Name_Tag.svg";
import "../styles/PortraitContent.css";

const PortraitContent = () => {
  return (
    <div>
      <div className="portrait-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Portrait />
        <img
          className="portrait-img"
          src={"https://gsoulis-assets.s3.us-west-1.amazonaws.com/Jerry_Solis.jpeg"}
          alt={"Gerardo Solis Portrait"}
        />
      </div>
      <div className="name-tag">
        <Name_Tag />
        <div className="name-tag-content">
          <div className="name-tag-text">Gerardo Solis</div>
          <div className="name-tag-subtext">
            Cybersecurity | Software Engineering
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitContent;
