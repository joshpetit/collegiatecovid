import React from "react"
import "./SchoolPage.css";

function Header(props) {
    const imageStyle = {
        backgroundImage: "url(duke.png)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "80vh"
    };

    return (
        <div style={imageStyle}>
            <h1 className="school-page-header">{props.name} Covid Tracker</h1>
        </div>
    )
}

export default Header
