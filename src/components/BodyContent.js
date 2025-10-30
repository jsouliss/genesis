import React from "react";
import Body from "../svg/Body"
import "../styles/BodyContent.css"

const BodyContent = () => {
    return (
            <div className="body-container">
                <div className={"body-contents"}>
                    <div className={"title-text"}>
                        <h1>About Me</h1>
                    </div>
                    {/*
                    <div className={"desc-text"}>
                        <p>Description</p>
                    </div>
                    */}
                    <Body/>
                </div>
            </div>
    );
};

export default BodyContent;