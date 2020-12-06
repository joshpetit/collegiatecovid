import React from "react";
import SearchBarz from "./HomePageComponents/SearchBarz"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function HomePage(){
    return (
    <div className="Header">
        <div className="HomeMenu PureMenu PureMenuHorizontal PureMenuFixed">
            <a className="PureMenuHeading" href="">Collegiate Covid</a>

            <ul className="PureMenuList">
                <li className="PureMenuItem PureMenuSelected"><a href="#" className="PureMenuLink">Home</a></li>
                <li className="PureMenuItem"><a href="#" className="PureMenuLink">About</a></li>
                <li className="PureMenuItem">
                    <SearchBarz/>
                </li>
            </ul>
        </div>
    </div>

    )
}

// export default function App1() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>
//
//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/users">
//                         <Users />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
//
// function Home() {
//     return <h2>Home</h2>;
// }
//
// function About() {
//     return <h2>About</h2>;
// }
//
// function Users() {
//     return <h2>Users</h2>;
// }

