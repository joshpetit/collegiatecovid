import React from "react"
import "./SchoolPage.css"

function PolicySection(props) {
    const bulletStyle = {
        listStyleImage: "url(./bullet-point-symbol.png)",
    };
    console.log(props)
    return (
        <div id = "policy-section">
            <h2>Coronavirus Mitigation Policies</h2>
            <ul>
                <li style = {bulletStyle}>{"Mandatory Testing: "+ props.policies.frequency}</li>
                <li style = {bulletStyle}>{"People being tested: " + props.policies.people}</li>
                <li style = {bulletStyle}>{"Type of classes: " + props.policies.classes}</li>
                <li style = {bulletStyle}>{"Requires Symptom Check-in: " + props.policies.checkin}</li>
            </ul>
        </div>
    )
}

export default PolicySection
