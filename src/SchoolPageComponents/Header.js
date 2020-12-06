import React from "react"
import "./SchoolPage.css";

function Header(props) {
    return (
        <h1 className="school-page-header">{props.name} Covid Tracker</h1>
    )
}

export default Header