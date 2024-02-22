import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchProducts } from "../Store/Reducers.jsx";

const Navbar = () => {
    const [searchData, setSearchData ] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {cart} = useSelector((state) => state.app)

    const submitData = (e) => {
            e.preventDefault();
            dispatch(searchProducts(searchData))
    }

    const logoutFunction = () => {
        localStorage.clear('token')
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" >
                        Products
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page" href="#">
                                    Logout
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={submitData}>
                            <input
                                value={searchData}
                                onChange={(e) => setSearchData(e.target.value)}
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-primary" type="submit">
                                Search
                            </button>   
                            <Link to={'/cart'}>
                            <button type="button" className="btn btn-primary position-relative mx-2">
                            <i className="bi bi-cart"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart.length}
                                </span>
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
