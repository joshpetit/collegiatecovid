import React from "react";
import SchoolData from "../SchoolDataObjects/SchoolData";

import "./SchoolPage.css";
import Header from "./Header";
import PolicySection from "./PolicySection";
import StatisticSection from "./StatisticSection";


function SchoolPage(props) {
    console.log(props.stats)
    return (
        <div id="school-page">
            <Header name={props.name}/>
            <PolicySection policies={props.policies}/>
            <StatisticSection name={props.name} stats={props.stats}/>
        </div>
    )
}

export default SchoolPage;
