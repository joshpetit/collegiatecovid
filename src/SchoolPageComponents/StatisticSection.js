import React from "react";
import Statistic from "./Statistic";

function StatisticSection(props) {
  return (
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
  );
}

export default StatisticSection;
