import React from "react";
import "../styles/AboutBodyContent.css";

const AboutBodyContent = () => {
  return (
    <div>
      <h1 className={"title-text"} data-aos={"fade"}>
        gsoulis (re)build
      </h1>

      <h2 data-aos={"fade-up"} data-aos-delay={"100"}>
        About Me
      </h2>
      <p className={"about-text"} data-aos={"fade-up"} data-aos-delay={"200"}>
        I am a recent <b>Computer Science</b> graduate with a minor in{" "}
        <b>Computer Information Systems</b> from <b>Cal Poly Pomona</b>,
        currently working as a <b>software engineer</b> at <b>JT4</b>. Outside
        of work, I am diving deep into <b>cybersecurity</b>-completing CTFs,
        studying for certifications, and exploring offensive security
        techniques. This blog documents my journey through software engineering,
        security research, and everything I am learning along the way.
      </p>

      <p className={"about-text"} data-aos={"fade-up"} data-aos-delay={"200"}>
        I am currently focused on earning the{" "}
        <a href={"https://www.zeropointsecurity.co.uk/course/red-team-ops-ii"}>
          CRTO II (Certified Red Team Operator II) from Zero Point Security
        </a>
        , with <a href={"https://www.offsec.com/courses/pen-200/"}>OSCP</a> in
        the near future. I will update this blog when time allows.
      </p>

      <br />

      <h2 id={"certifications"} data-aos={"fade-up"}>
        Certifications & Labs
      </h2>
      <ul className={"cert-list"} data-aos={"fade-up"} data-aos-delay={"100"}>
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

      <h2 data-aos={"fade-up"}>Competitions</h2>
      <ul className={"comp-list"} data-aos={"fade-up"} data-aos-delay={"100"}>
        <li>
          <span>
            <strong>Global Collegiate Penetration Testing Competition</strong> -
            Regional Champion
          </span>
          <span>2024</span>
        </li>
        <li>
          <a
            href={
              "https://gsoulis-assets.s3.us-west-1.amazonaws.com/ITC_Awards_2024.png"
            }
          >
            <span>
              <strong>Information Technology Competition</strong> - Team
              Captain, 1st Place
            </span>
          </a>
          <span>2024</span>
        </li>
        <li>
          <a
            href={
              "https://gsoulis-assets.s3.us-west-1.amazonaws.com/NCAE_2024_Scoreboard.png"
            }
          >
            <span>
              <strong>NCAE-C</strong> - Team Captain, Nationals 2nd Place
            </span>
          </a>
          <span>2024</span>
        </li>
        <li>
          <span>
            <strong>U.S. DOE CyberForce</strong> - Team Captain, 16th Place, 1st
            in Defensive Category
          </span>
          <span>2023</span>
        </li>
        <li>
          <span>
            <strong>NCAE-C</strong> - Regional Champion
          </span>
          <span>2023</span>
        </li>
      </ul>
      <footer className="about-footer">
        <p data-aos={"fade-up"}>
          Special thanks to Bill, Alex, Dylan, and SWIFT for introducing me to
          cybersecurity and giving me the opportunity to learn and grow within
          this field.
        </p>
        <p className="footer-note" data-aos={"fade-up"} data-aos-delay={"100"}>
          This site initially used GitHub Pages but is now being rebuilt from
          scratch. All code and services are developed and configured by me.
        </p>
      </footer>
    </div>
  );
};

export default AboutBodyContent;
