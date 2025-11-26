import React from "react";
import "../styles/AboutBodyContent.css"

const AboutContent = () => {
    return (
        <div>
            <h1 className={"title-text"}>gsoulis (re)build</h1>

            <h2>About Me</h2>
            <p className={"about-text"}>
                I am a recent <b>Computer Science</b> graduate with a minor in <b>Computer Information Systems</b> from <b>Cal Poly Pomona</b>, currently working as a <b>software engineer</b> at <b>JT4</b>. Outside of work, I am diving deep into <b>cybersecurity</b>—completing CTFs, studying for certifications, and exploring offensive security techniques. This blog documents my journey through software engineering, security research, and everything I am learning along the way.
            </p>

            <br />

            <h2 id={"certifications"}>Certifications & Labs</h2>
            <ul className={"cert-list"}>
                <li>Red Team Operator (CRTO)</li>
                <li>Certified Red Team Ops Certificate of Course Completion (Zero-Point Security)</li>
                <li>Certified Red Team Professional (CRTP)</li>
                <li>Active Directory Attacks Lab (Altered Security)</li>
                <li>HackTheBox Pro Labs - Dante</li>
                <li>Google IT Support Specialization</li>
                <li><s>CompTIA A+ ce Certification</s> (Expired)</li>
            </ul>

            <br />

            <h2>Competitions</h2>
            <ul className={"comp-list"}>
                <li>
                    <span><strong>Global Collegiate Penetration Testing Competition</strong> - Regional Champion</span>
                    <span>2024</span>
                </li>
                <li>
                    <span><strong>Information Technology Competition</strong> - 1st Place</span>
                    <span>2024</span>
                </li>
                <li>
                    <span><strong>National Centers of Academic Excellence in Cybersecurity</strong> - Nationals 2nd Place</span>
                    <span>2024</span>
                </li>
                <li>
                    <span><strong>U.S. Department of Energy CyberForce</strong> - 16th Place/1st in Defensive Category</span>
                    <span>2023</span>
                </li>
                <li>
                    <span><strong>National Centers of Academic Excellence in Cybersecurity</strong> - Regional Champion</span>
                    <span>2023</span>
                </li>
            </ul>
            <footer className="about-footer">
                <p>
                    Special thanks to Bill, Alex, Dylan, and SWIFT for introducing me to cybersecurity and giving me an opportunity to learn and grow further within this field.
                </p>
                <p className="footer-note">
                    This site was initially using github pages but is now being rebuilt from scratch. All code and services will be developed and configured by me.
                </p>
            </footer>
        </div>
    );
}

export default AboutContent;