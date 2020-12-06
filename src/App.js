import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import SchoolPage from "./SchoolPageComponents/SchoolPage"

export default function App() {
  return (
      <Router>
    <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to="/">Landing Page</Link>
                </li>
                <li>
                    <Link to="/school">School</Link>
                </li>
            </ul>
        </nav>

        {//this is what defines what each route does
        }
        <Switch>
            <Route path="/school">
                <SchoolPage school-name = />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    </div>
      </Router>
  );
}

/**
 * This landing page component is called whenever a link to this page is clicked
 You delete this function and use whatever component you have
 that encompasses landing page
 */
function LandingPage() {
    return <h2>Welcome to College Coronavirus Tracker!</h2>;
}

