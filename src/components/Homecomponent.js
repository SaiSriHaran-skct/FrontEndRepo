import React, { Component } from "react";
import Homecss from "./style/style.module.css";
import { Link } from "react-router-dom";

class Homecomponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  

  render() {
    return (
      <div>
        <header>
          <div className={Homecss.wrapper}>
            <ul className={Homecss.nav_area}>
              <li>
                <Link to={"/"}>
                  <b style={{ fontSize: "20px" }}>Home</b>
                </Link>
              </li>
              <li>
                <Link to={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/Create"} >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className={Homecss.welcome_text}>
            <h1>
              Employeee Management System
              <br />
              <span>&nbsp;EMC</span>
            </h1>
            <Link to={"/login"} >
              Login
            </Link>{" "}
            &nsbp;
            <Link to={"/Create"} >
              Register
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Homecomponent;
