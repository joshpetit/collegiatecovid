import React from "react";
import logo from "../logo.svg";
import "./SchoolPage.css"
import Header from "./Header";

function SchoolPage(props) {
    return (
        <div id="school-page">
            <Header name={props.name}/>
            <PolicySection name = {props.name}/>
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