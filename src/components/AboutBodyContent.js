import React from "react";
import "../styles/AboutBodyContent.css";

const AboutBodyContent = () => {
  return (
    <div>
      <h1 className={"title-text"}>gsoulis (re)build</h1>

      <h2>About Me</h2>
      <p className={"about-text"}>
        I am a recent <b>Computer Science</b> graduate with a minor in{" "}
        <b>Computer Information Systems</b> from <b>Cal Poly Pomona</b>,
        currently working as a <b>software engineer</b> at <b>JT4</b>. Outside
        of work, I am diving deep into <b>cybersecurity</b>—completing CTFs,
        studying for certifications, and exploring offensive security
        techniques. This blog documents my journey through software engineering,
        security research, and everything I am learning along the way.
      </p>

      <br />

      <h2 id={"certifications"}>Certifications & Labs</h2>
      <ul className={"cert-list"}>
        <li>
          <a
            href={
              "https://certs.zeropointsecurity.co.uk/ecdab280-804c-44b7-b85e-a28aa032a9f1#acc.YHN1MEac"
            }
          >
            Red Team Operator (CRTO)
          </a>
        </li>
        <li>
          <a
            href={
              "https://gsoulis-assets.s3.us-west-1.amazonaws.com/CRTO_Course_Cert.pdf"
            }
          >
            Certified Red Team Ops Certificate of Course Completion (Zero-Point
            Security)
          </a>
        </li>
        <li>
          <a
            href={
              "https://www.credential.net/dfe6afe4-e750-49c4-8b75-2ffdd972cfde#acc.fEqxFQJN"
            }
          >
            Certified Red Team Professional (CRTP)
          </a>
        </li>
        <li>
          <a
            href={
              "https://badges.parchment.eu/public/assertions/RXaXYM-hQ5ixInY9dzW9cw"
            }
          >
            Active Directory Attacks Lab (Altered Security)
          </a>
        </li>
        <li>
          <a
            href={"https://gsoulis-assets.s3.us-west-1.amazonaws.com/Dante.pdf"}
          >
            HackTheBox Pro Labs - Dante
          </a>
        </li>
        <li>
          <a
            href={
              "https://www.coursera.org/account/accomplishments/specialization/certificate/GS765KUFZCK2"
            }
          >
            Google IT Support Specialization
          </a>
        </li>
        <li>
          <a
            href={
              "https://www.credly.com/badges/71cce9f2-65ff-4fb8-9926-1cc5e223b8dc/linked_in_profile"
            }
          >
            <s>CompTIA A+ ce Certification</s> (Expired)
          </a>
        </li>
      </ul>

      <br />

      <h2>Competitions</h2>
      <ul className={"comp-list"}>
        <li>
          <span>
            <strong>Global Collegiate Penetration Testing Competition</strong> -
            Regional Champion
          </span>
          <span>2024</span>
        </li>
        <li>
          <span>
            <strong>Information Technology Competition</strong> - 1st Place
          </span>
          <span>2024</span>
        </li>
        <li>
          <span>
            <strong>
              National Centers of Academic Excellence in Cybersecurity
            </strong>
            - Nationals 2nd Place
          </span>
          <span>2024</span>
        </li>
        <li>
          <span>
            <strong>U.S. Department of Energy CyberForce</strong> - 16th
            Place/1st in Defensive Category
          </span>
          <span>2023</span>
        </li>
        <li>
          <span>
            <strong>
              National Centers of Academic Excellence in Cybersecurity
            </strong>
            - Regional Champion
          </span>
          <span>2023</span>
        </li>
      </ul>
      <footer className="about-footer">
        <p>
          Special thanks to Bill, Alex, Dylan, and SWIFT for introducing me to
          cybersecurity and giving me an opportunity to learn and grow further
          within this field.
        </p>
        <p className="footer-note">
          This site was initially using github pages but is now being rebuilt
          from scratch. All code and services will be developed and configured
          by me.
        </p>
      </footer>
    </div>
  );
};

export default AboutBodyContent;
