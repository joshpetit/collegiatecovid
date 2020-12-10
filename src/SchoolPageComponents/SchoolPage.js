import React from "react";
import "./SchoolPage.css";
import { Typography } from "@material-ui/core/";
import PolicySection from "./PolicySection";
import StatisticSection from "./StatisticSection";

function SchoolPage(props) {
  return (
    <div id="school-page">
      <Typography
        component="h1"
        align="center"
        variant="h4"
        className="school-page-header"
      >
        <b>{props.name} Covid Tracker</b>
      </Typography>
      <StatisticSection name={props.name} stats={props.stats} />
      <PolicySection policies={props.policies} />
    </div>
  );
}

export default SchoolPage;
