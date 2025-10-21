import React from "react";
import { ReactComponent as BoxBody } from "../assets/body/BoxBody.svg";
import { ReactComponent as BoxHeader } from "../assets/body/BoxHeader.svg";
import "../styles/component_styles/PostContent.css";

const PostContent = () => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-header">
          <div className="post-title">Cybersecurity</div>
          <BoxHeader />
        </div>
        <BoxBody />
      </div>
      <div className="post">
        <header className="post-header">
          <div className="post-title">Software Engineering</div>
          <BoxHeader />
        </header>
        <BoxBody />
      </div>
    </div>
  );
};

export default PostContent;
