import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logincss from "./style/login.module.css";
import axios from "axios";
import { toast } from "react-toastify";

class Logincomponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const logincred = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(logincred);
    axios
      .post(`https://emp-crudapp.herokuapp.com/Login`, { logincred })
      .then((res) => {
        if (res.data.validation === "true") {
          toast.success("Logged In Successfully");
          console.log(res.data.validation);
          localStorage.setItem("userDetails", JSON.stringify(res.data));
           setTimeout(this.props.history.push("/profile"), 10000);
        }
      })
      .catch((err) => {
        toast.error("Login Failed");
      });
  }
  render() {
    return (
      <div className={Logincss.comp}>
        <header>
          <div className={Logincss.wrapper}>
            <ul className={Logincss.nav_area}>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/login"}>
                  <b style={{ fontSize: "20px" }}>Login</b>
                </Link>
              </li>
              <li>
                <Link to={"/create"}>Register</Link>
              </li>
            </ul>
          </div>
          <div className="container" align="right">
            <div
              className="jumbotron"
              style={{
                paddingTop: "10%",
                width: "50%",
                textAlign: "left",
              }}
            >
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>
                    {" "}
                    <b style={{ color: "white" }}>Email address</b>{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    required
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    <b style={{ color: "white" }}>Password</b>{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.changePassword}
                    value={this.state.password}
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                    required
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-lg"
                    style={{ width: "70%", borderRadius: "30px" }}
                  >
                    <b>
                      <i>Submit</i>
                    </b>
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Logincomponent;
