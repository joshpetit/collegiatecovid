//Code to read Json from a file take from:
//https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824#:~:text=Reading%20a%20JSON%20file,data%20into%20a%20JavaScript%20object.

import {getCollegeStats} from "../data/db";
import {getCollegePolicies} from "../data/db";


export default class SchoolData {
    constructor(state) {
            //TODO:change this to be dynamic for each school?
        const imgUrl = "./duke.png"
        const stats = getCollegeStats(state.name);

        let schoolPolicy = getCollegePolicies(state.name);
        console.log(schoolPolicy)
        console.log(Object.keys(schoolPolicy))

        //initialization of data
        this.name = state.name;
        this.frequency = schoolPolicy.frequency;
        this.people = schoolPolicy.people;
        this.classes = schoolPolicy.classes;
        this.checkin = schoolPolicy.checkin;
        this.cases = stats.pos_cases;
        this.tests = stats.total_tests;
        this.positivity = stats.pos_rate;
        this.isolation = stats.isolation;
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


