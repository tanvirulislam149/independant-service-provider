import React from 'react';
import "./Login.css";
import google from "../../image/google.png"
import twitter from "../../image/twitter.png"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div style={{ marginTop: "50px" }} className='d-flex justify-content-center'>
                <form>
                    <h1 className='text-center text-primary'>Please Login</h1> <br />
                    <input className='my-2 py-2 login-field' type="email" name="email" placeholder='Enter Your Email' required /> <br />
                    <input className='my-2 py-2 login-field' type="password" name="password" placeholder='Enter Your Password' required /><br />
                    <input className='my-2 py-2 bg-primary border-0 mx-auto w-25 d-block rounded-pill fw-bold text-white' type="submit" value="Login" /> <br />
                    <Link to="/register" className='text-primary text-center d-block text-decoration-none fw-bold'>New Here? Create An Account</Link>
                    <div className='d-flex justify-content-center align-items-center'>
                        <hr className='w-25 mx-3' />
                        <p className='text-muted pb-1 my-0'>or</p>
                        <hr className='w-25 mx-3' />
                    </div>
                </form>
            </div>
            <button className='mx-auto d-block my-3 bg-white text-primary fw-bold py-3 px-5 border-primary rounded-pill border-1'> <img className='logo' src={google} alt="" /> Continue With Google</button>
            <button className='mx-auto d-block my-3 bg-white text-primary fw-bold py-3 px-5 border-primary rounded-pill border-1'> <img className='logo' src={twitter} alt="" /> Continue With Twitter</button>
        </div>
    );
};

export default Login;