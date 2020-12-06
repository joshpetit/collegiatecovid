import React from "react"

function PolicySection(props) {

    return (
        <div>
            <h2>covid mitigation policies</h2>
            <ul>
                <li>{"hello Mandatory Testing: "+ props.school.frequency}</li>
                <li>{"People being tested: " + props.school.people}</li>
                <li>{"Type of classes: " + props.school.classes}</li>
                <li>{"Requires Symptom Check-in: " + props.school.classes}</li>
            </ul>
        </div>
    )
}

export default PolicySection