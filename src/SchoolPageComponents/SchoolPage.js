import React from "react";
import SchoolData from "../SchoolDataObjects/SchoolData";

import "./SchoolPage.css";
import Header from "./Header";
import PolicySection from "./PolicySection";
import StatisticSection from "./StatisticSection";


function SchoolPage(props) {
    let data = new SchoolData(props.name);

    return (
        <div id="school-page">
            <Header name={props.name}/>
            <PolicySection name={props.name}/>
            <StatisticSection school={data} />
        </div>
    )
}

export default SchoolPage;