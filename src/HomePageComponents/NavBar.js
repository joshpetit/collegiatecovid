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
import firebase from '../data/secret'

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      colleges: [],
        policies: {
        },
        stats:{
        }
    };
    this.callBack = this.callBack.bind(this);
  }

  callBack = (props) => {
    this.setState({
      name: props,
      redirect: 'school'
    });
  firebase.firestore().collection('college_policies').doc(props).get().then( (x) => {
    this.setState({
      school: {
        policies: x.data(),
      }
    })
  })

  firebase.firestore().collection('colleges_stats').doc(props).get().then( (x) => {
    this.setState({
        stats: x.data()
    })
    console.log(this.state.school.stats)
  })

  };

  componentDidMount() {
  let ref = firebase.firestore().collection('colleges')
  ref.onSnapshot( (q) => {
      q.forEach( (doc) => {
        doc.data()['Colleges'].forEach( (x) => {
          this.setState({
            colleges:[
              ...this.state.colleges,
              {'name': x['name']}
            ]
            })
        })
    });
  }) 
  }

  render() {
    return (
      <div>
        <nav>
          <div className="Navs">
            <div style={{ marginTop: 10, width: 500 }}>
              <SearchBarz callBack={this.callBack} schools={this.state.colleges} />
            </div>
          </div>
        </nav>

        <Router>
              {
                this.state.redirect &&
                  <Redirect to={this.state.redirect} />
              }
          <Switch>
            <Route path="/school">
              <SchoolPage name={this.state.name}
              policies={this.state.policies} stats={this.state.stats}/>
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
