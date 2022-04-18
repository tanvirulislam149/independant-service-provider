import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const WelcomePage = () => {
    const [currentUser, CurrentUserLoading] = useAuthState(auth);

    return (
        <div>
            <div className='text-center' style={{ marginTop: "150px" }}>
                <h1>Welcome To DENTCARE</h1>
                <h4>A Professional Dentist For Your Teeth Problem</h4>
                <p>Login Email: {currentUser?.email}</p>
            </div>
        </div>
    );
};

export default WelcomePage;