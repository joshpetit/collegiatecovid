import React from "react";
import "./SchoolPage.css";
import { Typography } from "@material-ui/core/";
import PolicySection from "./PolicySection";

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

      <div id="statistic-section">
        <h2>{props.name + " by the numbers"}</h2>
        <div id="statistic-elements">
          <Statistic
            statistic={{ name: "Total cases", stat: props.stats.pos_cases }}
          />
          <Statistic
            statistic={{ name: "Total tests", stat: props.stats.total_tests }}
          />
          <Statistic
            statistic={{
              name: "7 Day Positivity Rate",
              stat: props.stats.pos_rate,
            }}
          />
          <Statistic
            statistic={{
              name: "People in Isolation",
              stat: props.stats.isolation,
            }}
          />
        </div>
      </div>

      <PolicySection policies={props.policies} />
    </div>
  );
}

function Statistic(props) {
  return (
    <div id="statistic">
      <p>{props.statistic.name}</p>
      <p>{props.statistic.stat == null ? "Unknown" : props.statistic.stat}</p>
    </div>
  );
}

export default SchoolPage;
