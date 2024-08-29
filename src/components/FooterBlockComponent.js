import React from "react";
import FooterBlock from "../svg/FooterBlock";
const FooterBlockComponent = ({ children }) => {
  return (
    <div className="footer-block">
      <div className="footer-content">{children}</div>
      <FooterBlock />
    </div>
  );
};

export default FooterBlockComponent;
