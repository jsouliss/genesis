import React from "react";
import "../styles/component_styles/Body.css";
import BG_Portrait from "../svg/BG_Portrait";
import BG_Square from "../svg/BG_Square";
import portrait from "../assets/body/Portrait.png";
import { ReactComponent as Name_Tag } from "../assets/body/Name_Tag.svg";
import { ReactComponent as BG_Square_2 } from "../assets/body/BG_Square_2.svg";

const Body = () => {
  return (
    <div className="body">
      <bgsquare className="bg-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Square />
      </bgsquare>
      <portrait className="portrait-container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Portrait />
        <img
          className="portrait-img"
          src={portrait}
          alt={"Gerardo Solis Portrait"}
        />
      </portrait>
      <section className="name-tag">
        <Name_Tag />
        <div className="name-tag-content">
          <div className="name-tag-text">Gerardo Solis</div>
          <div className="name-tag-subtext">
            Software Engineering | Offensive Security | Game Development
          </div>
        </div>
      </section>
      <bgsquare className="bg-container-2">
        <BG_Square_2 />
      </bgsquare>
    </div>
  );
};

export default Body;
