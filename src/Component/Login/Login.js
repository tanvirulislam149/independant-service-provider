import React, { useState } from 'react';
import "./Login.css";
import google from "../../image/google.png"
import twitter from "../../image/twitter.png"
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [currentUser, CurrentUserLoading] = useAuthState(auth);


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const [error, setError] = useState("");
    // let navigate = useNavigate();

    if (CurrentUserLoading || loading) {
        return (
            <div>
                <Loading></Loading>
            </div>
        )
    }

    if (loginError || googleError) {
        if (!error) {
            setError(loginError?.message || googleError.message);
        }
    }


    if (currentUser) {
        return (
            <div className='text-center' style={{ marginTop: "150px" }}>
                <h1>Welcome To DENTCARE</h1>
                <h4>A Professional Dentist For Your Teeth Problem</h4>
                <p>Login Email: {currentUser?.email}</p>
            </div>
        );
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }


    return (
        <div>
            <div style={{ marginTop: "50px" }} className='d-flex justify-content-center'>
                <form onSubmit={handleLogin}>
                    <h1 className='text-center text-primary'>Please Login</h1> <br />
                    <input className='my-2 py-2 login-field' type="email" name="email" placeholder='Enter Your Email' required /> <br />
                    <input className='my-2 py-2 login-field' type="password" name="password" placeholder='Enter Your Password' required /><br />
                    <p className='text-danger'>{error}</p>
                    <input className='my-2 py-2 bg-primary border-0 mx-auto w-25 d-block rounded-pill fw-bold text-white' type="submit" value="Login" /> <br />
                    <Link to="/register" className='text-primary text-center d-block text-decoration-none fw-bold'>New Here? Create An Account</Link>
                    <div className='d-flex justify-content-center align-items-center'>
                        <hr className='w-25 mx-3' />
                        <p className='text-muted pb-1 my-0'>or</p>
                        <hr className='w-25 mx-3' />
                    </div>
                </form>
            </div>
            <button onClick={handleGoogleLogin} className='mx-auto d-block my-3 bg-white text-primary fw-bold py-3 px-5 border-primary rounded-pill border-1'> <img className='logo' src={google} alt="" /> Continue With Google</button>
            <button className='mx-auto d-block my-3 bg-white text-primary fw-bold py-3 px-5 border-primary rounded-pill border-1'> <img className='logo' src={twitter} alt="" /> Continue With Twitter</button>
        </div>
    );
};

export default Login;