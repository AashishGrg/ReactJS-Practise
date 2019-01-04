import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Driver from "./components/Driver";
import Passenger from "./components/passenger";
import Trip from "./components/trip";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={"/"} className="nav-link">
                    {" "}
                    Dashboard{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/driver"} className="nav-link">
                    Driver
                  </Link>
                </li>
                <li>
                  <Link to={"/passenger"} className="nav-link">
                    Passenger
                  </Link>
                </li>
                <li>
                  <Link to={"/trips"} className="nav-link">
                    Trip
                  </Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/driver" component={Driver} />
              <Route path="/passenger" component={Passenger} />
              <Route path="/trips" component={Trip} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
