import React from "react";
import "./SchoolPage.css";

function PolicySection(props) {
  const bulletStyle = {
    listStyleImage: "url(./bullet-point-symbol.png)",
  };
  console.log(props);
  return (
    <div id="policy-section">
      <h2>Coronavirus Mitigation Policies</h2>
      <ul>
        <li style={bulletStyle}>
          {"Mandatory Testing: "}
          <b>{props.policies.frequency}</b>
        </li>
        <li style={bulletStyle}>
          {"People being tested: "}
          <b>{props.policies.people}</b>
        </li>
        <li style={bulletStyle}>
          {"Type of classes: "}
          <b>{props.policies.classes}</b>
        </li>
        <li style={bulletStyle}>
          {"Requires Symptom Check-in: "}
          <b>{props.policies.checkin}</b>
        </li>
      </ul>
    </div>
  );
}

export default PolicySection;
