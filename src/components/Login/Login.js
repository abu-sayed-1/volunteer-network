import React from 'react';
import './login.css'
import logo from '../images/logos/Group 1329.png'
import googleIcon from '../images/logos/google.png'
const Login = () => {
    return (
        <div className='login_container'>
            <img className="logoItem" src={logo} alt=""/>
            <div className='login'>
                <div className="login_info">
                    <h4>Login With</h4>
                    <button> <img className='googleIcon' src={googleIcon} alt="" /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;