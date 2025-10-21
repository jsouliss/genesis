import React from "react";
import PortraitContent from "../components/PortraitContent";
import PostContent from "../components/PostContent";
import "../styles/component_styles/Home.css";

const Home = () => {
  return (
    <>
      <div className={"portrait-content-container"}>
        <PortraitContent />
      </div>
      <PostContent />
    </>
  );
};

export default Home;