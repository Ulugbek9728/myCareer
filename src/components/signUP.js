import React from 'react';
import SignUpCard from "./signUpCard";
import RoutesPath from "../routes/routes";
import {useNavigate} from "react-router";
import AnimeCarusel from "./animeCarusel";
import {useSelector} from "react-redux";

function SignUp(props) {

    const navigate = useNavigate();

    return (
        <div className="login">
            <div className="logoBg">
                <img src="./images/Napa_logo_white.svg" alt="" onClick={() =>{navigate(RoutesPath.home)}}/>
            </div>
            <div className={"sign-in"}>
                <SignUpCard/>

            </div>
           <AnimeCarusel/>
        </div>
    );
}

export default SignUp;