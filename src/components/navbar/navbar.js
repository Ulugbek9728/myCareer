import React from 'react';
import RoutesPath from "../../routes/routes";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import "./navbar.scss";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className=" navbar navbar-expand-md">
            <button type="button" className="navbar-toggler knopka" data-bs-toggle="collapse"
                data-bs-target="#myCollapse">
                <label htmlFor="check">
                    <input type="checkbox" id="check" />
                    <span></span>
                    <span></span>
                </label>
            </button>

            <div className="collapse navbar-collapse" id="myCollapse">

                <ul className="nav">
                    <li className="nav-item">
                        <div className='nav-link' data-bs-toggle="tab" onClick={() => {
                            navigate(RoutesPath.home)
                        }} >Home</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link active" data-bs-toggle="tab"
                            onClick={() => { navigate(RoutesPath.talants) }}>Talants</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" data-bs-toggle="tab"
                            onClick={() => { navigate(RoutesPath.postJop) }}>Jobs</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" data-bs-toggle="tab"
                            onClick={() => { navigate(RoutesPath.aboutUs) }}>About us</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" data-bs-toggle="tab">Contact us</div>
                    </li>
                </ul>
                <div className='boxBtn'>
                    <Button className="custom-outline-btn" onClick={() => {
                        navigate(RoutesPath.login)
                    }}>Log in</Button>
                    <Button className="custom-outline-btn sign-btn" onClick={() => {
                        navigate(RoutesPath.signUp)
                    }}>Sign up</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar