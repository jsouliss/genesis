import React from "react";
/* icons */
import Pdf from "../assets/docs/Gerardo-Solis-Resume.pdf";
import fileIcon from "../assets/footer/file.png";
import mailIcon from "../assets/footer/mention.png";
import linkedinIcon from "../assets/footer/linkedin.png";
import githubIcon from "../assets/footer/github.png";
import instagramIcon from "../assets/footer/instagram.png";
import discordIcon from "../assets/footer/discord.png";
/* styles */
import "../styles/component_styles/Footer.css";

/* components */
import ContactInfo from "./ContactInfo";
import FooterBlockComponent from "./FooterBlockComponent";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer-container">
        <div className="footer-block-container">
          <FooterBlockComponent>
            <ContactInfo icon={fileIcon} text="Certifications" href="" isLink />
            <ContactInfo icon={fileIcon} text="Resume" href={Pdf} isLink />
            <ContactInfo icon={mailIcon} text="gsolis5114@gmail.com" />
          </FooterBlockComponent>
          <FooterBlockComponent>
            <SocialLink
              href="https://www.linkedin.com/in/gerardosolisit/"
              icon={linkedinIcon}
              altText={"LinkedIn"}
              linkText={"LinkedIn"}
            />
            <SocialLink
              href="https://github.com/Sol-Gerardo"
              icon={githubIcon}
              altText={"GitHub"}
              linkText={"GitHub"}
            />
          </FooterBlockComponent>
          <FooterBlockComponent>
            <SocialLink
              href="https://www.instagram.com/jsoulis_/"
              icon={instagramIcon}
              altText={"Instagram"}
              linkText={"Instagram"}
            />
            <SocialLink
              href="https://discordapp.com/users/609820784759799814"
              icon={discordIcon}
              altText={"Discord"}
              linkText={"Discord"}
            />
          </FooterBlockComponent>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
