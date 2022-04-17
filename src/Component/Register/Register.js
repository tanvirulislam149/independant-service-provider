import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from '../Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        creatingLoading,
        creatingError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [currentUser, loading, userError] = useAuthState(auth);

    const [error, setError] = useState("");

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || currentUser) {
            navigate(from, { replace: true });
        }
    }, [user, currentUser, navigate, from]);

    if (loading || creatingLoading) {
        return (
            <div>
                <Loading></Loading>
            </div>
        )
    }


    // const [loading, setLoading] = useState("");

    if (creatingError || userError) {
        if (!error) {
            setError(creatingError.message || userError.message);
        }
    }

    // if (creatingLoading) {
    //     console.log("loading");
    // }

    if (currentUser) {
        return (
            <div className='text-center' style={{ marginTop: "150px" }}>
                <h1>Welcome To DENTCARE</h1>
                <h4>A Professional Dentist For Your Teeth Problem</h4>
                <p>Login Email: {currentUser?.email}</p>
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
                    <input className='my-2 py-2 bg-primary border-0 mx-auto w-25 d-block rounded-pill fw-bold text-white' type="submit" value="Sign Up" /> <br />
                    <Link to="/login" className='text-primary text-center d-block text-decoration-none fw-bold'>Already Have An Account ?</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;