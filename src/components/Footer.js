import React from "react";
import "../styles/component_styles/Footer.css";
import FooterBlock from "../svg/FooterBlock";
import Pdf from "../assets/docs/Gerardo-Solis-Resume.pdf";
import fileIcon from "../assets/footer/file.png";
import mentionIcon from "../assets/footer/mention.png";
import linkedinIcon from "../assets/footer/linkedin.png";
import githubIcon from "../assets/footer/github.png";
import instagramIcon from "../assets/footer/instagram.png";
import discordIcon from "../assets/footer/discord.png";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer-container">
        <div className="footer-block-container">
          <div className="footer-block">
            <div className="footer-content">
              <div className="horizontal-align">
                <img src={fileIcon} alt="CertIcon" className="cert-icon" />
                <a href="" target="_blank" className="cert-link">
                  Certifications
                </a>
              </div>
              <div className="horizontal-align">
                <img src={fileIcon} alt="Resume Icon" className="resume-icon" />
                <a href={Pdf} target="_blank" className="resume-link">
                  Resume
                </a>
              </div>
              <div className="horizontal-align">
                <img
                  src={mentionIcon}
                  alt="Mention Icon"
                  className="mention-icon"
                />
                <text>gsolis5114@gmail.com</text>
              </div>
            </div>
            <FooterBlock />
          </div>
          <div className="footer-block">
            <div className="footer-content">
              <div className="horizontal-align">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn Icon"
                  className="linkedin-icon"
                />
                <a
                  href="https://www.linkedin.com/in/gerardosolisit/"
                  target="_blank"
                  className="linkedin-link"
                >
                  LinkedIn
                </a>
              </div>
              <div className="horizontal-align">
                <img
                  src={githubIcon}
                  alt="Github Icon"
                  className="github-icon"
                />
                <a
                  href="https://github.com/Sol-Gerardo/"
                  target="_blank"
                  className="github-link"
                >
                  Github
                </a>
              </div>
            </div>
            <FooterBlock />
          </div>
          <div className="footer-block">
            <div className="footer-content">
              <div className="horizontal-align">
                <img
                  src={instagramIcon}
                  alt="Instagram Icon"
                  className="instagram-icon"
                />
                <a
                  href="https://www.instagram.com/jsoulis_/"
                  target="_blank"
                  className="instagram-link"
                >
                  Instagram
                </a>
              </div>
              <div className="horizontal-align">
                <img
                  src={discordIcon}
                  alt="discord Icon"
                  className="discord-icon"
                />
                <a
                  href="https://discordapp.com/users/609820784759799814"
                  target="_blank"
                  className="discord-link"
                >
                  Discord
                </a>
              </div>
            </div>
            <FooterBlock />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
