import React from "react";
import PortraitContent from "../components/PortraitContent";
import PostContent from "../components/PostContent";
import "../styles/component_styles/Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={"portrait-content-container"}>
      <PortraitContent />
      <PostContent />
    </div>
  );
};

export default Home;
