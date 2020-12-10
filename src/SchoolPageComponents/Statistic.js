import React from "react";
import "./SchoolPage.css";

function Statistic(props) {
  return (
    <div id="statistic">
      <p>{props.statistic.name}</p>
      <p>{props.statistic.stat == null ? "Unknown" : props.statistic.stat}</p>
    </div>
  );
}

export default Statistic;
