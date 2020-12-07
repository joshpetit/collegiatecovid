import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SearchBarz from "./SearchBarz";
import SchoolPage from "../SchoolPageComponents/SchoolPage";
import HomePage from "../HomePage";
import "../data/db";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.callBack = this.callBack.bind(this);
  }

  callBack = (props) => {
    this.setState({ name: props });
  };

  render() {
    return (
      <div>
        <nav>
          <div className="Navs">
            <div style={{ marginTop: 10, width: 500 }}>
              <SearchBarz callBack={this.callBack} />
            </div>
          </div>
        </nav>

        <Router>
          <Switch>
            <Route path="/school">
              <SchoolPage name={this.state} />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function AboutPage() {
  return <h1>About Page</h1>;
}

export default NavBar;
