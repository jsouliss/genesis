import React from "react";
import FooterBlock from "../svg/FooterBlock";

const FooterBlockComponent = ({ children }) => {
  return (
    <div className={"footer-block"}>
      <FooterBlock />
      <div className={"footer-content"}>{children}</div>
    </div>
  );
};

export default FooterBlockComponent;
