import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { AppBar } from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SchoolPage from "../SchoolPageComponents/SchoolPage";
import HomePage from "../HomePage";
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
        policies: x.data(),
    })
  })

  firebase.firestore().collection('colleges_stats').doc(props).get().then( (x) => {
    this.setState({
        stats: x.data()
    })
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
        <AppBar
          position='static'
        >
            <div >
              <Autocomplete
                style={{ margin: '0 auto', padding: 15, width: '80vh' }}
                onChange={(e, newValue) => {
                    if(newValue!==null) {
                        this.callBack(newValue.name)
                    }
                }}
                options={this.state.colleges}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Search for your School" variant="outlined" />}
            />
          </div>
        </AppBar>

        <Router>
              {
                this.state.redirect ?
                  <Redirect to={this.state.redirect} />
                  : <Redirect to='/'/>
              }
          <Switch>
            {
              this.state.redirect &&
            <Route path="/school">
              <SchoolPage name={this.state.name}
              policies={this.state.policies} stats={this.state.stats}/>
            </Route>
            }
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
