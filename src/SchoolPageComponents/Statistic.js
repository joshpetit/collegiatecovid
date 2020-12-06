import React from "react";

function Statistic(props) {
    return (
        <div id = "statistic">
            <h3>{props.statistic.name}</h3>
            <h3>{props.statistic.stat}</h3>
        </div>
    )
}

export default Statistic