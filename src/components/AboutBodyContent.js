import React from "react";
import AboutBody from "../svg/AboutBody"
import AboutContent from "./AboutContent"

import "../styles/Body.css"
import "../styles/AboutBodyContent.css"

const AboutBodyContent = () => {
    return (
        <div className="body-container">
            <AboutBody/>
            <div className={"content-wrapper"}>
                <p className={"desc-text"}>
                    <AboutContent/>
                </p>
            </div>
        </div>
    );
};

export default AboutBodyContent;