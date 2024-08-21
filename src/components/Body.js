import React from "react";
import "../styles/component_styles/Body.css";
import BodyContent from "./BodyContent";
import PostContent from "./PostContent";
import PortraitContent from "./PortraitContent";

const Body = () => {
  return (
    <div className="body">
      <BodyContent>
        <PortraitContent />
        <PostContent />
      </BodyContent>
    </div>
  );
};

export default Body;
