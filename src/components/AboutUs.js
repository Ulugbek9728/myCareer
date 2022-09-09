import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {displayCircle} from "../actions/careerAction";
import RoutesPath from "../routes/routes";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import VideoPlayer from "react-video-js-player"
import Car from '../img/videoForWork.mp4'


const enhancer = connect((
    {
        auth: {initialValue, homeCircleVisible},
        size: {size}
    }
) =>
    ({
        initialValue,
        size
    }));

const AboutUs = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(displayCircle());
    }, []);

    const videoSrc = Car;


    return (
        <div className="about-page" id="">
            <div>
                <div className="navbarHom">
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
                                        <div className='nav-link ' data-bs-toggle="tab" onClick={() => {
                                            navigate(RoutesPath.home)
                                        }}>Home
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link " data-bs-toggle="tab"
                                             onClick={() => {
                                                 navigate(RoutesPath.talants)
                                             }}>Talants
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" data-bs-toggle="tab"
                                             onClick={() => {
                                                 navigate(RoutesPath.postJop)
                                             }}>Jobs
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link active" data-bs-toggle="tab"
                                             onClick={() => {
                                                 navigate(RoutesPath.aboutUs)
                                             }}>About us
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" data-bs-toggle="tab"
                                             onClick={() => {
                                                 navigate(RoutesPath.contactUspage)
                                             }}>Contact us</div>
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
                    </div>
                </div>
            </div>

            <div className="about-page-box">
                <div className="left">
                    <VideoPlayer src={videoSrc}/>
                </div>
                <div className="right">
                    <div className="box ">
                        <h3>About us</h3>
                        <div className="linkBox">
                            <a href="#"><img src="./images/iconTelegram.svg" alt=""/></a>
                            <a href="#"><img src="./images/iconFacebook.svg" alt=""/></a>
                            <a href="#"><img src="./images/iconInstogram.svg" alt=""/></a>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus
                        dolorum fugiat, iste iure iusto nihil non possimus rem saepe soluta vel voluptates.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus dolorum
                        fugiat, iste iure iusto nihil non possimus rem saepe soluta vel voluptates.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus dolorum
                        fugiat, iste iure iusto nihil non possimus rem saepe soluta vel voluptates.
                    </p>

                </div>
            </div>
            <div className="patternn2">
                <img src="./images/white-ell1.svg" alt="pattern"/>
                <img src="./images/white-ell2.svg" alt="pattern"/>
                <img src="./images/white-ell3.svg" alt="pattern"/>
                <img src="./images/white-ell4.svg" alt="pattern"/>
                <img src="./images/white-ell5.svg" alt="pattern"/>
            </div>
        </div>
    );
}

export default enhancer(AboutUs);