import React from "react";
import "../styles/component_styles/Body.css";
import BG_Portrait from "../svg/BG_Portrait";
import BG_Square from "../svg/BG_Square";
import portrait from "../assets/body/Portrait.png";

const Body = () => {
  return (
    <div className="body">
      <div className="bg_container">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <BG_Square>
          <div className="portrait_container">
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <BG_Portrait>
              <img
                className="portrait_img"
                src={require("../assets/body/Portrait.png")}
                alt={"Gerardo Solis Portrait"}
              />
            </BG_Portrait>
          </div>
        </BG_Square>
      </div>
    </div>
  );
};

export default Body;
