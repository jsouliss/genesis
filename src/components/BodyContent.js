import React from "react";
import Body from "../svg/Body"
import "../styles/BodyContent.css"

const BodyContent = () => {
    return (
        <>
            <div className="about-container">
                <Body/>
                <div className="title-text">
                    <h1>About Me</h1>
                    <div className="desc-text">
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BodyContent;