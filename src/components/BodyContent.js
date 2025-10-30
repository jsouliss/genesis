import React from "react";
import Body from "../svg/Body"
import Content from "./Content"
import "../styles/BodyContent.css"

const BodyContent = () => {
    return (
        <div className="body-container">
            <Body/>
            <div className={"content-wrapper"}>
                <h1 className={"title-text"}>About Me</h1>
                <p className={"desc-text"}>
                    <Content/>
                </p>
            </div>
        </div>
    );
};

export default BodyContent;