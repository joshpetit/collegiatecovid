import React from "react";
import logo from "../logo.svg";
import "./SchoolPage.css"

function SchoolPage() {
    return (
        <div id="school-page">
            <header className="school-page-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Alan Wandke
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default SchoolPage;