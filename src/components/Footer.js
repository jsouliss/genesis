import React from "react";
/* icons */
import fileIcon from "../assets/footer/file.png";
import certIcon from "../assets/footer/cert.png";
import mailIcon from "../assets/footer/mention.png";
import linkedinIcon from "../assets/footer/linkedin.png";
import githubIcon from "../assets/footer/github.png";
import instagramIcon from "../assets/footer/instagram.png";
import discordIcon from "../assets/footer/discord.png";
import xIcon from "../assets/footer/x.png";

/* styles */
import "../styles/Footer.css";

/* svg */
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
              newTab={false}
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
              href="https://x.com/jsoulisss"
              icon={xIcon}
              altText={"X"}
              linkText={"X"}
            />
            <FooterLinks
              href="https://www.instagram.com/jsouliss/"
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
        </footer>
        <div className="footer-bottom">
          <div className="bbox">
            <span className="box-text">Trust the Process</span>
          </div>
          <p className="copyright">Copyright © 2025 Gerardo Solis</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
