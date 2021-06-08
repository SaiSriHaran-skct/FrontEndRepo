import React, { Component } from "react";
import Createstylecss from "./style/createstyle.module.css";
import axios from "axios";
import { toast } from "react-toastify";

class Createcomponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password:"",
      email: "",
      emp_code: "",
      address: "",
      join_date: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmpcode = this.changeEmpcode.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeJoindate = this.changeJoindate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeName(event) {
    this.setState({
      name: event.target.value,
    });
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
  changeEmpcode(event) {
    this.setState({
      emp_code: event.target.value,
    });
  }
  changeAddress(event) {
    this.setState({
      address: event.target.value,
    });
  }
  changeJoindate(event) {
    this.setState({
      join_date: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const create = {
      name: this.state.name,
      password:this.state.password,
      email: this.state.email,
      emp_code: this.state.emp_code,
      address: this.state.address,
      join_date: this.state.join_date,
    };
    console.log(create);
    axios
      .post(`https://emp-crudapp.herokuapp.com/Create`, {create})
      .then((res) => {
        if (res.data.result === "Account Created") {
          setTimeout(this.props.history.push("/login"), 10000);
          toast.dark("Created Successfully");
        } else {
          toast.info("Account exist with this email.");
        }
      })
  }
  render() {
    return (
      <div className={Createstylecss.hihello}>
        <div
          className="container"
          style={{
            textAlign: "left",
            paddingTop: "20px",
            color: "white",
            width: "30%",
          }}
        >
          <h2>Create Employee</h2>
          <form onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="Text"
                className="form-control"
                placeholder="Name"
                onChange={this.changeName}
                value={this.state.name}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Emp-Code</label>
              <input
                type="number"
                className="form-control"
                placeholder="Emp-Code"
                onChange={this.changeEmpcode}
                value={this.state.emp_code}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                placeholder="Address"
                onChange={this.changeAddress}
                value={this.state.address}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Joining</label>
              <input
                type="date"
                className="form-control"
                onChange={this.changeJoindate}
                value={this.state.join_date}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Createcomponent;
