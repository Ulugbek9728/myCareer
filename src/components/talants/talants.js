import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import RoutesPath from "../../routes/routes";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

function Talants(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="post-jop-wrapper" id="overflow-y-scroll">


                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="input-group bg-white py-3 px-3 mb-3 w-100" style={{borderRadius: "6px"}}>
                                <input type="text" className="border-0"
                                       style={{outline: "none", border: "none", width: "97%"}}
                                       placeholder="Job title, keywords..."/>
                                <div className="input-group-append d-flex align-items-center">
                                    <img src="/images/search.png" alt="Error"/>
                                </div>
                            </div>
                            <div className="bg-white p-3" style={{borderRadius: "6px"}}>
                                <div className="menu mb-4">
                                    <ul className="nav h-100">
                                        <li className="nav-item"><Link
                                            className={`nav-link ${props.history === RoutesPath.bestMatches ? 'active' : ""}`}
                                            to={RoutesPath.bestMatches}>Best matches</Link></li>
                                        <li className="nav-item"><Link
                                            className={`nav-link ${props.history === RoutesPath.NewTalants ? 'active' : ""}`}
                                            to={RoutesPath.NewTalants}>New</Link></li>
                                        <li className="nav-item"><Link
                                            className={`nav-link ${props.history === RoutesPath.Saved ? 'active' : ""}`}
                                            to={RoutesPath.Saved}>Saved</Link></li>
                                    </ul>
                                </div>

                                {props.children}

                            </div>
                        </div>
                        <div className="col-3 pb-5">
                            <div className="profile_jop">
                                <div className="d-flex">
                                    <div className="">
                                        <img className="w-100" src="/images/prof_jop.png" alt="Error"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6>
                                            Company
                                        </h6>
                                    </div>
                                </div>
                                <div className="d-flex mt-1 justify-content-between align-items-center">


                                </div>
                                <div className="d-flex">

                                </div>
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <h6 className="pt-2">Portfolio</h6>

                                </div>
                                <p className="mt-1" style={{marginBottom: "80px"}}>https://musofir.uz/</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  Talants;