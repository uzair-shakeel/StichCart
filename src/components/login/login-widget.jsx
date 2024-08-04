//libs
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier  } from "firebase/auth";
//actions
import {login, loginSuccess} from '../../actions/auth-action';
//Components
import OtpVerify from '../otp-verify/otp-verify';
import ErrorWidget from '../error-widget/error-widget';
//images
import logo from '../../styles/images/logo.png';
import googleLogo from '../../styles/images/google.svg';
import loginLogo from '../../styles/images/login.svg';

//firebase config    
import firebaseConfig from '../../config/firebaseconfig';
// Initialize Firebase
var firebaseApp;
if (firebaseApp == null){
    firebaseApp = initializeApp(firebaseConfig);
}

const auth = getAuth();

const LoginWidget = ({onLoginSuccess, onLoginFailure, onClose}) => {

    const[phoneNumber, setPhoneNumber] = useState('');
    const [showOtpScreen, setshowOtpScreen] = useState(false);
    const [final, setFinal] = useState('');
    const [sendOtpCodeOnLoad, setSendOtpCodeOnLoad] = useState(false);
    const [isLoginLoadingPrev, setIsLoginLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.authState.user);
    const isLoginLoading = useSelector((state) => state.authState.isLoginLoading);
    const loginSuccess = useSelector((state) => state.authState.loginSuccess);
    const error = useSelector((state) => state.authState.loginSuccess);

    useEffect(() => {
        if(user && loginSuccess) {
            onLoginSuccess();
        } 
    },[isLoginLoading]);

    useEffect(() => {
        setErrorMessage(error);
    },[error]);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        //Testing code
        //this.authWithServer('Enclothe', 'Google', null, 'jabeen.sam@gmail.com', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWJlZW4', 'Sam Jabeen', null);
        //const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                const token = credential.idToken;
                // The signed-in user info.
                const user = result.user;
                let displayName = user.displayName;
                let email = user.email;
                let emailVerified = user.emailVerified;
                let phoneNumber = user.phoneNumber;
                let photoURL  = user.photoURL;
                console.log(user);
                console.log(token);
                authWithServer('Enclothe', 'Google', null, email, token, displayName, null);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setErrorMessage('Something happened on server, pleasetry again later! ')
                // ...
            });
    }

    const authWithServer = (appId, social, deviceId, email, idToken, firstName, lastName) => {
        dispatch(login(appId, social, deviceId, email, idToken, firstName, lastName));
    }

    const submitPhoneNumber = () => {

        if(phoneNumber.length <10) return;
        setshowOtpScreen(true);
        setSendOtpCodeOnLoad(true);

/*         const auth = getAuth();
        let recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log('response',response);
                onSignInSubmit();
            },
            'expired-callback': () => {
                console.log('expired');
            },
            'error-callback': (error) => {
                console.log(error);
            }
        }, auth);

        let phoneNo = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        phoneNo = `+91 ${phoneNo}`;
        setFmtPhoneNumber(phoneNo);

        signInWithPhoneNumber(auth, phoneNo, recaptchaVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                //window.confirmationResult = confirmationResult;
                setFinal(confirmationResult);
                setshowOtpScreen(true);
                setSendOtpCodeOnLoad(true);
            }).catch((error) => {
                // Error; SMS not sent
                console.log(error)
            }); */

    }

    const onChangeHandler = event => {
        if(event.target.value.length <= 10)
            setPhoneNumber(event.target.value);
    };

    /*
    if (user && localStorage.getItem("user_data") != null) {
        return <Navigate to="/home" replace={true} />
    }
    */

    const handlePhoneSign = (phoneNumber, idToken) => {
        //this.setState({ isLoading: true, loginBtnClicked: true });
        authWithServer('Enclothe', "firebase-phone",null, null, idToken, null, null);
    }

    const renderPhoneNumber = () => {
        return (
            <>
                <div className="fielddiv">
                    <input 
                        type="number" placeholder="Phonenumber" id="phonenumber" 
                        value={phoneNumber} onChange={onChangeHandler}/>
                    <label className="dispplaynone">Phone Number</label>
                    <div id="sign-in-button"></div>
                </div>
                <div className={"btn " + (phoneNumber.trim().length == 10 ? 'btn-primary': 'disabled')} id="genbtn" onClick={()=>submitPhoneNumber()}>Generate otp</div>
            </>
        )
    }

    return (
       <>
            <div className="popup">
                <div className="loginpopup login">
                    <ErrorWidget errorMessage={errorMessage}/>
                    <h1>Login  <span onClick={()=>onClose()}>X</span></h1>
                    <img src={loginLogo} />
                    <label>Enter your Phone Number</label>
                    <span>We will send you the 6 digit verification code</span>
                    <div className="form">
                        { !showOtpScreen &&
                                renderPhoneNumber()
                        }
                        { showOtpScreen &&
                            <OtpVerify phoneNo={phoneNumber} sendOtpCodeOnLoad={sendOtpCodeOnLoad}  onSuccess={handlePhoneSign} authLoading={isLoginLoading}/>
                        }
                        <div className="socailbtn">
                            <div className="signupdiv"><div className="signuptxt">Or sign up with</div></div>
                            <div className="btn btn-white" onClick={()=>signInWithGoogle()}><img src={googleLogo} /> Continue with <span> Google</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginWidget;