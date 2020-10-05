import React, { useContext } from 'react';
import './login.css'
import logo from '../images/logos/Group 1329.png'
import googleIcon from '../images/logos/google.png'
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../firebase.config'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    let {from} = location.state || {form:{pathname:"/"}}
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                 const isSignedInUser = {
                    name: displayName,
                    email: email,
                }
                setLoggedInUser(isSignedInUser)
                storeAuthToken()
            }).catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                let email = error.email;
                let credential = error.credential;
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token', idToken)
          history.replace(from)
        }).catch(function(error) {
          // Handle error
        });
      }

    return (
        <div className='login_container'>
            <img className="logoItem" src={logo} alt="" />
            <div className='login'>
                <div className="login_info">
                    <h4>Login With</h4>
                    <button onClick={handleGoogleSignIn}> <img className='googleIcon' src={googleIcon} alt="" /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;