import React from "react"
import "./SchoolPage.css"

function PolicySection(props) {

    return (
        <div id = "policy-section">
            <h2>Coronavirus Mitigation Policies</h2>
            <ul>
                <li>{"Mandatory Testing: "+ props.school.frequency}</li>
                <li>{"People being tested: " + props.school.people}</li>
                <li>{"Type of classes: " + props.school.classes}</li>
                <li>{"Requires Symptom Check-in: " + props.school.checkin}</li>
            </ul>
        </div>
    )
}

export default PolicySection