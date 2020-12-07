import React from "react";
import "./SchoolPage.css";
import Header from "./Header";
import PolicySection from "./PolicySection";
import StatisticSection from "./StatisticSection";


function SchoolPage(props) {
    return (
        <div id="school-page">
            <Header name={props.name}/>
            <StatisticSection name={props.name} stats={props.stats}/>
            <PolicySection policies={props.policies}/>
        </div>
    )
}

export default SchoolPage;
