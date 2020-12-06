import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";
import SearchBarz from "./SearchBarz";
import SchoolPage from "../SchoolPageComponents/SchoolPage";
import HomePage from "../HomePage";
import '../data/db'
import "./NavBar.css";

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.callBack = this.callBack.bind(this);

    }

    callBack = (props) => {
        this.setState({name: props})
        this.state.changed = true
        console.log(props, this.state.changed)
    }


    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="Navs">
                            <div style={{marginLeft: 10, marginRight: 200}}>
                                <Link to="/" style={{textDecoration: 'none'}}><h2>Collegiate Covid</h2></Link>
                            </div>
                            <div style={{marginTop: 10, width: 500}}>
                                <SearchBarz callBack={this.callBack}/>
                                {this.state.changed &&
                                <Redirect to="/school"/>}
                                {/*TODO: make run multiple times*/}
                            </div>


                        </div>
                    </nav>

                    <Switch>
                        <Route path="/school">
                            <SchoolPage name={this.state}/>
                            {this.state.changed = false}
                        </Route>
                        <Route path="/about">
                            <AboutPage/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )

    }
}




function AboutPage() {
    return <h1>About Page</h1>
}

export default NavBar
