import React from 'react';
import LoginCard from "./loginCard";
import RoutesPath from "../routes/routes";
import {useNavigate} from "react-router";
import AnimeCarusel from "./animeCarusel";

const Login = props => {

    const navigate = useNavigate();

    return (
        <div className="login">
            <div className="logoBg">
                <img src="./images/Napa_logo_white.svg" alt=""
                     onClick={() =>{navigate(RoutesPath.home)}}/>
            <div className={"sign-in"}>
                <LoginCard/>
            </div>
            <AnimeCarusel/>
        </div>
        </div>
    );
};

export default Login;