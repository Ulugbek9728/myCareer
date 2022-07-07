import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {setAuthEmailValue, setAuthPasswordValue} from "../actions/authAction";
import RoutesPath from "../routes/routes";


const enhancer = connect(
    (
        {size: {size}, auth: {authEmailInitialValue, authPasswordInitialValue},}) => {
        return ({
            size,
            authEmailInitialValue,
            authPasswordInitialValue,
        });
    }, null);

function SignUpCard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState(false);


    const handleEmailValue = event => {
        dispatch(setAuthEmailValue(event.target.value))
    };
    function EmailValue() {
        dispatch(setAuthEmailValue(""))
    }
    const handlePasswordValue = event => {
        dispatch(setAuthPasswordValue(event.target.value))
    };

    return (
        <>
            {email ?
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">Check your email</Card.Title>

                        <img className="emailSvg" src="images/Email_SVG 1.svg" alt=""/>
                        <div className="bottom-title">
                            Check your <b>{props.authEmailInitialValue}</b> inbox for instructions from us on how
                            to verify your account.
                        </div>
                        <hr/>
                        <div className="bottom-icons" onClick={EmailValue}>
                   <span onClick={() =>  {
                       navigate(RoutesPath.login)}}>Go to login screen</span>
                        </div>
                    </Card.Body>
                </Card>
                :
                <Card>
                    <Card.Body>
                        <Card.Title>Sign Up</Card.Title>
                        <Card.Text>Do you have an account ?<span onClick={() => {
                            navigate(RoutesPath.login)
                        }}>
                        Log in Now !</span></Card.Text>
                        <Form>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleEmailValue}
                                    value={props.authEmailInitialValue}/>
                            </Form.Group>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={handlePasswordValue}
                                    value={props.authPasswordInitialValue}/>
                            </Form.Group>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="password"
                                    id="authPassword"
                                    placeholder="Confirm password"/>
                            </Form.Group>
                        </Form>

                        <div className="bottom-fields">
                            <Button className="custom-btn" onClick={()=>setEmail(true)}>Continue</Button>
                        </div>
                        <div className="bottom-title">Or continue with</div>
                        <div className="bottom-icons">
                            <div className="icon"><img src="./images/facebook-3 logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/github logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/Google logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/Group 244.svg" alt=""/></div>
                        </div>
                    </Card.Body>
                </Card>
            }
        </>
    );
}

export default enhancer(SignUpCard);