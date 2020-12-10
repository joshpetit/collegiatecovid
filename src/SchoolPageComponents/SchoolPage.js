import React from "react";
import "./SchoolPage.css";
import PolicySection from "./PolicySection";
import StatisticSection from "./StatisticSection";


function SchoolPage(props) {
    return (
        <div id="school-page">
            <h1 className="school-page-header">{props.name} Covid Tracker</h1>
            <StatisticSection name={props.name} stats={props.stats}/>
            <PolicySection policies={props.policies}/>
        </div>
    )
}


export default SchoolPage;
