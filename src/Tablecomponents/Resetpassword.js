import React, { Component } from "react";
import { toast } from "react-toastify";
import axios from "axios";

class Resetpassword extends Component {
    constructor(){
        super();
        this.state={
            password:"",
            reenterpassword:"",
            otp:""
        }
        this.changeOtp=this.changeOtp.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeReenterpassword=this.changeReenterpassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    changeOtp(event) {
        this.setState({
          otp: event.target.value,
        });
      }
      changePassword(event) {
        this.setState({
          password: event.target.value,
        });
      }
      changeReenterpassword(event) {
        this.setState({
          reenterpassword: event.target.value,
        });
      }
      onSubmit(event) {
        event.preventDefault();
        const Resetpass = {
            otp:this.state.otp,
            password:this.state.password,
            reenterpassword:this.state.reenterpassword
        };
        console.log(Resetpass);
        toast.info(Resetpass);
         /* axios.post("http://localhost:5000/SignUp",Resetpass)
                .then(res=>{
                    toast.success("Resetted Successfully")
                    setTimeout(this.props.history.push('/login'),10000);
                 })
                .catch(err=>{
                    toast.info("");
                }) */
      }
  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            textAlign: "left",
            paddingTop: "50px",
            color: "white",
            width: "30%",
          }}
        >
          <h2>Reset Password</h2>
          <form onSubmit={this.onSubmit}>
          <div className="mb-3">
              <label className="form-label">OTP</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter OTP"
                onChange={this.changeOtp}
                value={this.state.otp}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="Text"
                className="form-control"
                placeholder="New Password"
                onChange={this.changePassword}
                value={this.state.password}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> Re-enter New Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Re-enter New Password"
                onChange={this.changeReenterpassword}
                value={this.state.reenterpassword}
                required
              />
              <br/><br/>
                <button type="submit" className="btn btn-primary" style={{textAlign:"center"}}>
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Resetpassword;
