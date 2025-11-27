import React from "react";
import { ReactComponent as BoxBody } from "../assets/body/BoxBody.svg";
import { ReactComponent as BoxHeader } from "../assets/body/BoxHeader.svg";
import "../styles/FeaturedPostContent.css";

const FeaturedPostContent = () => {
  return (
    <div className="featured-post-container">
      <div className="featured-post">
        <div className="featured-post-header">
          <div className="featured-post-title">Cybersecurity</div>
          <BoxHeader />
        </div>
        <BoxBody />
      </div>
      <div className="featured-post">
        <header className="featured-post-header">
          <div className="featured-post-title">Software Engineering</div>
          <BoxHeader />
        </header>
        <BoxBody />
      </div>
    </div>
  );
};

export default FeaturedPostContent;
