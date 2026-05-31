import React  from 'react';
import FooterBlock from "../svg/FooterBlock"
type FooterBlockComponentProps = {
  children: React.ReactNode;
};

const FooterBlockComponent = ({ children } : FooterBlockComponentProps) => {
  return (
    <div className={"footer-block"}>
      <FooterBlock />
      <div className={"footer-content"}>{children}</div>
    </div>
  );
};

export default FooterBlockComponent;