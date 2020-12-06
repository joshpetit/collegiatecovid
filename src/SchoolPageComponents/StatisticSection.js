import React from "react";
import Statistic from "./Statistic";

function StatisticSection(props) {

    return (
        <div id = "statistic-section">
            <h2>{props.school.name + " by the numbers"}</h2>
            <div id = "statistic-elements">
                <Statistic statistic={{name:"Total cases", stat:props.school.cases}}/>
                <Statistic statistic={{name:"Total tests", stat:props.school.tests}}/>
                <Statistic statistic={{name:"7 Day Positivity Rate", stat:props.school.positivity}}/>
                <Statistic statistic={{name:"People in Isolation", stat:props.school.isolation}}/>
            </div>
        </div>


        )

}

export default StatisticSection