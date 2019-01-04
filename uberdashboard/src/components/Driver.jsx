import React, { Component } from "react";
import axios from "axios";
const API = "http://192.168.11.98:8000/api/dashboard/driver/list/";
const DEFAULT_QUERY = "redux";

class Driver extends Component {
  state = {
    drivers: []
  };
  componentDidMount() {
    axios
      .get(`http://192.168.11.98:8000/api/dashboard/driver/list/`)
      .then(res => {
        const drivers = res.data;
        this.setState({ drivers });
        console.log(drivers);
      });
  }
  render() {
    return (
      <div>
        <h2>
          Hello
          {/* <ul>
            {this.state.drivers.map(driver => (
              <li>{driver.first_name}</li>
            ))}
          </ul> */}
        </h2>
      </div>
    );
  }
}

export default Driver;
