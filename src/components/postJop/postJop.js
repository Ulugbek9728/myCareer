import React from 'react';
import RoutesPath from "../../routes/routes";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function PostJop(props) {
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
                                    <div className="nav-link" data-bs-toggle="tab"
                                         onClick={() =>{navigate(RoutesPath.talants)}}>Talants</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link active" data-bs-toggle="tab"
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

<div className='talantsContainer d-flex'>
<div className="input-group">
  <input type="text" className="form-control form-control0" placeholder='Title, keywords...' aria-label="Text input with segmented dropdown button"/>
  <button type="button" className="forSearchBtn forSearchBtn99 btn btn-outline-secondary"><div className='searchIcon searchIcon1'></div></button>
</div>
<div className='allCards1'>
<div className='personalCard personalCard0'>
   <div className='d-flex'>
     <div className='jobsCardText'>Business Card Design</div>
     <div className='d-flex'>
       <div className='cardJobSuccess cardHourly1 cardHourly cardJobLeft'><div>10$</div></div>
       <div className='cardHourly cardHourly1 cardJobLeft cardJ'><div>3 days</div></div>
       <div className='cardHourly cardJobs cardHourly1'><div className='cardHourlyText'>Required level: Middle</div></div>
     </div>
     <div className='cardLikeBtn cardLikeBtnnn' onClick={handleClass}></div>
   </div>
   <div className='cardText d-flex'>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows: ... <div className='cardPointer'></div></div>
   <div className='cardSkills'>Figma  |  Adobe PhotoShop  |  Adobe Illustrator</div>
   <div className='d-flex cardIdentity'>
     <div className='d-flex'>
       <div className='cardPic1'></div>
       <div className='cardUserName'>Napa Automotive</div>
       <div className='cardTick cardTick1'></div>
       <div className=' pt-5 cardSphere1 cardJob'>Verified</div>
     </div>
     <div className='d-flex'>
       <div className='cardJobSuccess cardHourly cardTextPaddingLeft'><div>3 Years</div><div className='cardJob'>In service</div></div>
       <div className='cardHourly cardTextPaddingLeft'><div>24</div> <div className='cardHourlyText'>Completed Jobs</div></div>
       <div className='cardHourly cardJobs cardTextPaddingLeft'><div>1530$</div> <div className='cardHourlyText'>Paid</div></div>
     </div>
     <div className='cardPostDate'>Posted 1 day ago</div>
   </div>
</div>
<div className='personalCard personalCard1 personalCard5'>
   <div className='d-flex'>
     <div className='jobsCardText'>Business Card Design</div>
     <div className='d-flex'>
       <div className='cardJobSuccess cardHourly1 cardHourly cardJobLeft'><div>10$</div></div>
       <div className='cardHourly cardHourly1 cardJobLeft cardJ'><div>3 days</div></div>
       <div className='cardHourly cardJobs cardHourly1'><div className='cardHourlyText'>Required level: Middle</div></div>
     </div>
     <div className='cardLikeBtn cardLikeBtnnn' onClick={handleClass}></div>
   </div>
   <div className='cardText d-flex'>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows: ... <div className='cardPointer'></div></div>
   <div className='cardSkills'>Figma  |  Adobe PhotoShop  |  Adobe Illustrator</div>
   <div className='d-flex cardIdentity'>
     <div className='d-flex'>
       <div className='cardPic1'></div>
       <div className='cardUserName'>Napa Automotive</div>
       <div className='cardTick cardTick1'></div>
       <div className=' pt-5 cardSphere1 cardJob'>Verified</div>
     </div>
     <div className='d-flex'>
       <div className='cardJobSuccess cardHourly cardTextPaddingLeft'><div>3 Years</div><div className='cardJob'>In service</div></div>
       <div className='cardHourly cardTextPaddingLeft'><div>24</div> <div className='cardHourlyText'>Completed Jobs</div></div>
       <div className='cardHourly cardJobs cardTextPaddingLeft'><div>1530$</div> <div className='cardHourlyText'>Paid</div></div>
     </div>
     <div className='cardPostDate'>Posted 1 day ago</div>
   </div>
</div>
<div className='personalCard personalCard6'>
   <div className='d-flex'>
     <div className='jobsCardText'>Business Card Design</div>
     <div className='d-flex'>
       <div className='cardJobSuccess cardHourly1 cardHourly cardJobLeft'><div>10$</div></div>
       <div className='cardHourly cardHourly1 cardJobLeft cardJ'><div>3 days</div></div>
       <div className='cardHourly cardJobs cardHourly1'><div className='cardHourlyText'>Required level: Middle</div></div>
     </div>
     <div className='cardLikeBtn cardLikeBtnnn' onClick={handleClass}></div>
   </div>
   <div className='cardText d-flex'>Experienced designer required to make updates to website graphic assets and email banner. Files will be provided in Adobe illustrator and Photoshop PSD. Tasks as follows: ... <div className='cardPointer'></div></div>
   <div className='cardSkills'>Figma  |  Adobe PhotoShop  |  Adobe Illustrator</div>
   <div className='d-flex cardIdentity'>
     <div className='d-flex'>
       <div className='cardPic1'></div>
       <div className='cardUserName'>Napa Automotive</div>
       <div className='cardTick cardTick1'></div>
       <div className=' pt-5 cardSphere1 cardJob'>Verified</div>
     </div>
     <div className='d-flex'>
       <div className='cardJobSuccess cardHourly cardTextPaddingLeft'><div>3 Years</div><div className='cardJob'>In service</div></div>
       <div className='cardHourly cardTextPaddingLeft'><div>24</div> <div className='cardHourlyText'>Completed Jobs</div></div>
       <div className='cardHourly cardJobs cardTextPaddingLeft'><div>1530$</div> <div className='cardHourlyText'>Paid</div></div>
     </div>
     <div className='cardPostDate'>Posted 1 day ago</div>
   </div>
</div>
</div>
<div className='cardLogin'>
    <div className='cardLoginText'>Log in</div>
    <div className='cardLoginText1'>Still don’t have an account?</div>
    <div className='cardLoginText2'>Sign up now!</div>
    <div className="d-flex flex-column align-items-center">
               <div className="col-11 inputSizing77">
                 <input type="text" className="form-control" placeholder="Email" aria-label="Email"/>
               </div>
               <div className="col-11  inputSizing77">
                  <input type="password" className="form-control" placeholder="Password" aria-label="Password"/>
               </div>
    </div>
    <button type="button" className="signUpButtonStyle btn btn-primary">Continue</button>
    <hr className='ourhr' />
    <div className='text-center pt-4'>Or continue with</div>
    <div className="bottom-icons d-flex ps-5 pt-4">
                        <div className="icon ps-5"><img src="./images/facebook-3 logo.svg" alt=""/></div>
                        <div className="icon ps-4"><img src="./images/github logo.svg" alt=""/></div>
                        <div className="icon ps-4"><img src="./images/Google logo.svg" alt=""/></div>
                        <div className="icon ps-4"><img src="./images/Group 244.svg" alt=""/></div>
    </div>
</div>

</div>
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

export default  PostJop;