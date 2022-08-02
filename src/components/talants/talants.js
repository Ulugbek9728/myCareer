import React from 'react';
import RoutesPath from "../../routes/routes";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import TalentView from '../talent-view/talent-view';

function Talants(props) {
    const navigate = useNavigate();

    function handleClass() {
        let classes = document.getElementsByClassName('cardLikeBtn');

        if (classes.className === "cardLikeBtn") {
            classes.className = 'cardLikeBtn1';
        }
        else {
            classes.className = 'cardLikeBtn'
        }
    }

    return (
        <div>
            <div className="post-jop-wrapper" id="overflow-y-scroll">
                <div className={"navbarHom"}>
                    <div className="logoBg"><img src="./images/Napa_logo_white.svg" alt=""/></div>
                    <div className="homeNavbar">
                        <div className=" navbar navbar-expand-md">
                            <button type="button" className="navbar-toggler knopka" data-bs-toggle="collapse"
                                    data-bs-target="#myCollapse">
                                <label htmlFor="check">
                                    <input type="checkbox" id="check"/>
                                    <span></span>
                                    <span></span>
                                </label>
                            </button>

                            <div className="collapse navbar-collapse" id="myCollapse">

                                <ul className="nav">
                                    <li className="nav-item">
                                        <div className='nav-link' data-bs-toggle="tab" onClick={() =>{
                                            navigate(RoutesPath.home)}} >Home</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link active" data-bs-toggle="tab"
                                             onClick={() =>{navigate(RoutesPath.talants)}}>Talants</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" data-bs-toggle="tab"
                                             onClick={() =>{navigate(RoutesPath.postJop)}}>Jobs</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" data-bs-toggle="tab"
                                             onClick={() =>{navigate(RoutesPath.aboutUs)}}>About us</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" data-bs-toggle="tab">Contact us</div>
                                    </li>
                                </ul>
                                <div className='boxBtn'>
                                    <Button className="custom-outline-btn" onClick={() =>{
                                        navigate(RoutesPath.login)}}>Log in</Button>
                                    <Button className="custom-outline-btn sign-btn" onClick={() =>{
                                        navigate(RoutesPath.signUp)}}>Sign up</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <TalentView />
            </div>
            <div className="pattern99">
                <img src="./images/white-ell1.svg" alt="pattern"/>
                <img src="./images/white-ell2.svg" alt="pattern"/>
                <img src="./images/white-ell3.svg" alt="pattern"/>
                <img src="./images/white-ell4.svg" alt="pattern"/>
                <img src="./images/white-ell5.svg" alt="pattern"/>
            </div>
        </div>
    );
}

export default  Talants;