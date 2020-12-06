//Code to read Json from a file take from:
//https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824#:~:text=Reading%20a%20JSON%20file,data%20into%20a%20JavaScript%20object.

import SchoolPolicies from "../data/schoolPolicies"

export default class SchoolData {
    constructor(name) {
        //need a way or a place to get data from
        /**
        const schoolPolicies = new SchoolPolicies();
        const schoolDataObj = JSON.parse(schoolPolicies.schoolPolicies)
        const  = this.getNamedUniversity(schoolDataObj,name)
         */

        //mock data
        const imgUrl = "./duke.png"

        const schoolPolicy = {name:"Duke University", frequency:"1 per week", people: "everyone tested",
        classes:"blended", checkin:"everyday"}

        const data =
            {name: "Duke University",
            cases: 241,
            tests: 178084,
            positivity: 6.23,
            isolation: 28
        }

        //initialization of data
        this.name = schoolPolicy.name;
        this.frequency = schoolPolicy.frequency;
        this.people = schoolPolicy.people;
        this.classes = schoolPolicy.classes;
        this.checkin = schoolPolicy.checkin;
        this.cases = data.cases;
        this.tests = data.tests;
        this.positivity = data.positivity;
        this.isolation = data.isolation;
        this.imgUrl = imgUrl;
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


