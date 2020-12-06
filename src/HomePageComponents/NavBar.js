import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";
import SearchBarz from "./SearchBarz";
import SchoolPage from "../SchoolPageComponents/SchoolPage";
import HomePage from "../HomePage";

class NavBar extends React.Component{
    constructor() {
        super()
        this.state = {total:0}
        this.callBack=this.callBack.bind(this);

    }

    callBack = (props) => {
        this.setState({name: props})
        this.state.changed=true
        this.state.total++
        console.log(props, this.state.changed)
    }


    render(){
        return(
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Collegiate Covid</Link>

                        </li>

                            <SearchBarz callBack={this.callBack}/>
                            {this.state.changed&&
                            <Redirect to="/school"/>} //TODO: make run multiple times
                    </ul>
                </nav>

                <Switch>
                    <Route path="/school">
                        <SchoolPage name = {this.state}/>
                        {this.state.changed=false}
                        {console.log(this.state.changed, this.state.total)}
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
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