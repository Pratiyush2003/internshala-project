import React, { useState } from "react";
import { createuser } from "../Store/Reducers.jsx";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState({});
  console.log(users)
  const getUserData = (e) => {
    setUsers({...users, [e.target.name] : e.target.value})
  }

  const handleSubmit = () => {
    createuser(users)
    navigate('/login')
  }
  return (
    <div className="container w-50 mt-5 pt-5">
        <div className="row align-items-center">
            <div className="col bg-dark text-white" data-bs-theme="dark">
            <form className="p-3">
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Your Name
            </label>
            <input
              name = "name"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Doe"
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Your Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="test@123"
              onChange={getUserData}
            />
          </div>
          
            <button className="btn btn-primary mb-3" onClick={handleSubmit}>Submit</button>
          </form>
          </div>
        </div>
      </div>
  );
};

export default Signup;
