import React from "react"
import "./SchoolPage.css";

function Header(props) {
    const imageStyle = {
        backgroundImage: "url("+props.school.imgUrl+")",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "80vh"
    };

    return (
        <div style={imageStyle}>
            <h1 className="school-page-header">{props.school.name} Covid Tracker</h1>
        </div>
    )
}

export default Header