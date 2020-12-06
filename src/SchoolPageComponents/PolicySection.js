import React from "react"
import "./SchoolPage.css"

function PolicySection(props) {
    const bulletStyle = {
        listStyleImage: "url(./bullet-point-symbol.png)",
    };

    return (
        <div id = "policy-section">
            <h2>Coronavirus Mitigation Policies</h2>
            <ul>
                <li style = {bulletStyle}>{"Mandatory Testing: "+ props.school.frequency}</li>
                <li style = {bulletStyle}>{"People being tested: " + props.school.people}</li>
                <li style = {bulletStyle}>{"Type of classes: " + props.school.classes}</li>
                <li style = {bulletStyle}>{"Requires Symptom Check-in: " + props.school.checkin}</li>
            </ul>
        </div>
    )
}

export default PolicySection