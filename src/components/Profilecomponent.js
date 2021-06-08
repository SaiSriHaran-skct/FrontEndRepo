import React from "react";
import { Link } from "react-router-dom";
import  { useState} from "react";
import { useHistory} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Profilecomponent() {
  const [userDetails, setuserDetails] = useState(JSON.parse(localStorage.getItem('userDetails')));
  let history = useHistory();
  const signoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem('userDetails');
    history.push('/');
    return;
  }
  const deleteHandler = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/Delete`, {userDetails})
      .then(res => {
        if(res.data.deleted==="true")
        {
          console.log(res.data.deleted);
          toast.dark("Profile Deleted Successfully")
          localStorage.removeItem('userDetails');
          history.push('/');
          
        }
      })
    return;
  }
  return (
    <div className="container" style={{width:"60%" }}> 
      <div className="jumbotron" style={{ marginTop:"30px"}}>
        <h1 className="display-4">{userDetails.name}</h1>
        <p className="lead">

        {userDetails.email}|{userDetails.address}| {userDetails.empcode}| {userDetails.joiningdate}
        </p>
        <hr className="my-4" />
        <Link to={"/edit"} className="btn btn-primary"  role="button">
          <button className="btn btn-primary ">Edit</button>  
        </Link>
        &nbsp;
        <Link className="btn btn-danger btn-lg"  role="button" onClick={deleteHandler}>
          Delete
        </Link>
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={signoutHandler}>Sign Out</button>
      </div>
    </div>
  );
}

export default Profilecomponent;
