import React from "react";
import PortraitContent from "../components/PortraitContent";
import FeaturedPostContent from "../components/FeaturedPostContent";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className={"portrait-content-container"}>
        <PortraitContent />
      </div>
      <FeaturedPostContent />
    </>
  );
};

export default Home;
