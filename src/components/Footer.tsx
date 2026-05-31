import "../styles/FooterLinks.css";

type FooterProps = {
  href: string;
  icon: string;
  altText: string;
  linkText: string;
};

const Footer = ({ href, icon, altText, linkText }: FooterProps) => {
  return (
    <div className={`horizontal-align`}>
      <img
        src={icon}
        alt={altText}
        className={`${altText.toLowerCase()}-icon`}
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${altText.toLowerCase()}-link`}
      >
        {linkText}
      </a>
    </div>
  );
};

export default Footer;
