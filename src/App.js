import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SearchBarz from "./HomePageComponents/SearchBarz"
import HomePage from "./HomePage.js"
import SchoolPage from "./SchoolPageComponents/SchoolPage"
import NavBar from "./HomePageComponents/NavBar";

export default function App() {
  return (
      <NavBar />
  );
}


