import React from "react";
import SchoolPolicyData from "../SchoolDataObjects/SchoolPolicyData";

import "./SchoolPage.css";
import Header from "./Header";
import PolicySection from "./PolicySection";


function SchoolPage(props) {
    let schoolPolicy = new SchoolPolicyData(props.name);

    return (
        <div id="school-page">
            <Header name={props.name}/>
            <PolicySection name = {props.name}/>

            <body>Testing frequency: {schoolPolicy.frequency}</body>
        </div>
    )
}

export default SchoolPage;