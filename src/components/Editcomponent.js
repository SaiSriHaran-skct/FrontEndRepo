import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Editcomponent() {
  let history = useHistory();
  const [userDetails, setuserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [profileDetails, setprofileDetails] = useState({
    name: userDetails.name,
    email: userDetails.email,
    password: userDetails.password,
    empcode: userDetails.empcode,
    address: userDetails.address,
    joiningdate: userDetails.joiningdate,
  });
  const onChangeHandler = (e) => {
    let user = profileDetails;
    user[e.target.name] = e.target.value;
    setprofileDetails(user);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/Update`, { profileDetails })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.data.updated==="true")
        {
          console.log(res.data.updated);
          toast.success("Updated SuccessFully")
          localStorage.setItem('userDetails', JSON.stringify(res.data));
          history.push('/profile')
          setprofileDetails(JSON.parse(localStorage.getItem('userDetails')));
        }
        if(res.data.updated==="null")
        {
          console.log(setuserDetails);
        }
      })


    return;        
  }
  return (
    <div>
      <div
        className="card text-white bg-secondary"
        style={{
          width: "60%",
          textAlign: "left",
          marginTop: "3%",
          marginLeft: "20%",
          padding: "30px",
        }}
      >
        <h2 class="card-title">Edit</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="Text"
              className="form-control"
              placeholder="Name"
              onChange={onChangeHandler}
              name='name'
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={profileDetails.email}
              onChange={onChangeHandler}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Emp-Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="password"
              name="password"
              
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Emp-Code</label>
            <input
              type="number"
              className="form-control"
              placeholder="Emp-Code"
             
              name="empcode"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              placeholder="Address"
              name="address"
             
              required
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Joining</label>
            <input
              type="date"
              className="form-control"
              name="joiningdate"
             
              required
              onChange={onChangeHandler}
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

export default Editcomponent;
