import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div style={{ marginTop: "50px" }} className='d-flex justify-content-center'>
                <form>
                    <h1 className='text-center text-primary'>Please Register</h1> <br />
                    <input className='my-2 py-2 login-field' type="email" name="email" placeholder='Enter Your Email' required /> <br />
                    <input className='my-2 py-2 login-field' type="password" name="password" placeholder='Enter Your Password' required /><br />
                    <input className='my-2 py-2 login-field' type="password" name="confirmPassword" placeholder='Enter The Same Password' required /><br />
                    <input className='my-2 py-2 bg-primary border-0 mx-auto w-25 d-block rounded-pill fw-bold text-white' type="submit" value="Sign Up" /> <br />
                    <Link to="/login" className='text-primary text-center d-block text-decoration-none fw-bold'>Already Have An Account ?</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;