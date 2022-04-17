import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { Spinner } from 'react-bootstrap';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        creatingLoading,
        creatingError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [currentUser, loading, userError] = useAuthState(auth);

    const [error, setError] = useState("");

    if (loading || creatingLoading) {
        return (
            <div className='text-center' style={{ marginTop: "150px" }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div >
        )
    }


    // const [loading, setLoading] = useState("");

    if (creatingError || userError) {
        setError(creatingError?.message || userError?.message);
    }

    // if (creatingLoading) {
    //     console.log("loading");
    // }

    if (currentUser) {
        return (
            <div className='text-center' style={{ marginTop: "150px" }}>
                <p>Registered User: {currentUser?.email}</p>
            </div>
        );
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setError("Password didn't matched");
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password);
        }


    }

    return (
        <div>
            <div style={{ marginTop: "50px" }} className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center text-primary'>Please Register</h1> <br />
                    <input className='my-2 py-2 login-field' type="email" name="email" placeholder='Enter Your Email' required /> <br />
                    <input className='my-2 py-2 login-field' type="password" name="password" placeholder='Enter Your Password' required /><br />
                    <input className='my-2 py-2 login-field' type="password" name="confirmPassword" placeholder='Enter The Same Password' required /><br />
                    <p className='text-danger'>{error}</p>
                    {/* <p className='text-primary'>{loading}</p> */}
                    <input className='my-2 py-2 bg-primary border-0 mx-auto w-25 d-block rounded-pill fw-bold text-white' type="submit" value="Sign Up" /> <br />
                    <Link to="/login" className='text-primary text-center d-block text-decoration-none fw-bold'>Already Have An Account ?</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;