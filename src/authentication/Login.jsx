import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginuser } from "../Store/Reducers.jsx";

const Login = () => {
  const [user , setUsers] = useState({})
  const navigate = useNavigate()

  const getUserData = (e) => {
    setUsers({...user, [e.target.name] : e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    loginuser(user)
    navigate('/')
  }
  console.log(user)
  return (
    <>
      <div className="container w-50 mt-5 pt-5">
        <div className="row align-items-center">
            <div className="col bg-dark text-white" data-bs-theme="dark">
            <form className="p-3">
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
              onChange={getUserData}
              name="password"
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="test@123"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                <Link to={'/signup'} >New User</Link>
            </label>
            </div>
            <button className="btn btn-primary mb-3" onClick={handleLogin}>Submit</button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
