//Code to read Json from a file take from:
//https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824#:~:text=Reading%20a%20JSON%20file,data%20into%20a%20JavaScript%20object.

import SchoolPolicies from "../data/schoolPolicies"

export default class SchoolPolicyData {
    constructor(name) {
        //need a way or a place to get data from
        /**
        const schoolPolicies = new SchoolPolicies();
        const schoolDataObj = JSON.parse(schoolPolicies.schoolPolicies)
        const schoolData = this.getNamedUniversity(schoolDataObj,name)
         */
        const schoolData = {name:"Duke University", frequency:"1 per week", people: "everyone tested",
        classes:"blended", checkin:"everyday"}

        this.name = schoolData.name;
        this.frequency = schoolData.frequency;
        this.people = schoolData.people;
        this.classes = schoolData.classes;
        this.checkin = schoolData.checkin;
    }

    /**
    readJson(filepath) {
        const fs = require('fs');

        fs.readFile(filepath, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            try {
                const data = JSON.parse(jsonString)
                console.log("parse successful") // => "Customer address is: Infinity Loop Drive"
                return data;
            } catch(err) {
                console.log('Error parsing JSON string:', err)
            }
        })
    }
     */

    getNamedUniversity(data, name) {
        let obj;
        for (obj in data) {
            if (obj.name === name) {
                return obj;
            }
        }
    }

}


