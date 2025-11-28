import React from "react";
/* icons */
import fileIcon from "../assets/footer/file.png";
import certIcon from "../assets/footer/cert.png";
import mailIcon from "../assets/footer/mention.png";
import linkedinIcon from "../assets/footer/linkedin.png";
import githubIcon from "../assets/footer/github.png";
import instagramIcon from "../assets/footer/instagram.png";
import discordIcon from "../assets/footer/discord.png";
/* styles */
import "../styles/Footer.css";

/* svg */
import BBoxQuote from "../svg/BBoxQuote";

/* components */
import ContactInfo from "./ContactInfo";
import FooterBlockComponent from "./FooterBlockComponent";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="footer-block-container">
          <FooterBlockComponent>
            <ContactInfo
              icon={fileIcon}
              text="Resume"
              href={
                "https://gsoulis-assets.s3.us-west-1.amazonaws.com/Gerardo_S_Resume_Redact.pdf"
              }
              isLink
            />
            <ContactInfo
              icon={certIcon}
              text="Certifications"
              href={"/about#certifications"}
              isLink
            />
            <ContactInfo icon={mailIcon} text="jsoulis@pm.me" />
          </FooterBlockComponent>
          <FooterBlockComponent>
            <FooterLinks
              href="https://www.linkedin.com/in/gsoulis/"
              icon={linkedinIcon}
              altText={"LinkedIn"}
              linkText={"LinkedIn"}
            />
            <FooterLinks
              href="https://github.com/jsouliss"
              icon={githubIcon}
              altText={"GitHub"}
              linkText={"GitHub"}
            />
          </FooterBlockComponent>
          <FooterBlockComponent>
            <FooterLinks
              href="https://www.instagram.com/jsoulis_/"
              icon={instagramIcon}
              altText={"Instagram"}
              linkText={"Instagram"}
            />
            <FooterLinks
              href="https://discordapp.com/users/609820784759799814"
              icon={discordIcon}
              altText={"Discord"}
              linkText={"Discord"}
            />
          </FooterBlockComponent>
          <div className={"box-quote-container"}>
            <div className={"bbox"}>
              <BBoxQuote />
              <span className="box-text">Trust the Process</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
