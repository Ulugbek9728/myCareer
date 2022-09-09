import React from 'react';
import RoutesPath from "../routes/routes";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import "../assets/styles/ContactUsPage.scss"

function ContactUsPage(props) {
    const navigate = useNavigate();

    return (
        <div className="ContactUsPage">
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
                                    <div className='nav-link ' data-bs-toggle="tab" onClick={() =>{
                                        navigate(RoutesPath.home)}} >Home</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link " data-bs-toggle="tab"
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
                                    <div className="nav-link active" data-bs-toggle="tab"
                                         onClick={()=>{navigate(RoutesPath.contactUspage)}}>Contact us</div>
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

            <div className="ContactUsPageBox">
                <div className="left">
                    <a href="#" target="_blank">
                        <button><img src="./image/telegram.png" alt=""/>Go to Telegram</button>
                    </a>
                    <br/>
                    <a href="#" target="_blank">
                        <button><img src="./images/whatsapp.png" alt=""/>Go to Whats app</button>
                    </a>

                </div>
                <div className="right">
                    <h2>Contact us</h2>
                    <p>Fill in the blank and we will contact you</p>

                    <form>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" id="name" placeholder="name"
                                   name="email"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="email" className="form-control" id="email" placeholder="E-mail"
                                   name="email"/>
                                <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mt-3 mb-3">
                            <input type="text" className="form-control" id="tel" placeholder="Enter password"
                                   name="tel"/>
                                <label htmlFor="tel">Phone number</label>
                        </div>
                        <div className=" mt-3 mb-3">
                            <textarea className="form-control" rows="5" placeholder="Text message" name="text"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;