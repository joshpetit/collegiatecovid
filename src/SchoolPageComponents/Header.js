import React from "react"
import "./SchoolPage.css";

function Header(props) {
    const imageStyle = {
        backgroundImage: "url("+props.name.replaceAll(' ', '')+".jpg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "30vh"
    };

    return (
        <div style={imageStyle}>
            <h1 className="school-page-header">{props.name} Covid Tracker</h1>
        </div>
    )
}

export default Header
