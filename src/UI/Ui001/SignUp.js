import React from "react";
import './styles/SignUp.css';
import Title from '../../Title';
import logo from './assets/Logo.svg'
function SignUp(){
    return(
        <div className="signUp">
            <Title title="day 001" />
            <div className="signUp__body">
                <div className="signUp__info">
                    <img src={ logo } alt="lock.data" />
                    <h1>PROTECT <br /> YOUR DATA <br /> WITH US.</h1>
                    <p><b>230,100.04</b> People trust us!</p>
                </div>
                <div className="signUp__form">
                    <input className="signUp__formInput1" type="email" placeholder="Email address" />
                    <input className="signUp__formInput2" type="password" placeholder="Password" />
                    <button>SIGN UP</button>
                    <p>Already Signed Up? <span>Log in</span></p>
                </div>
            </div>
        </div>
        )
}

export default SignUp
