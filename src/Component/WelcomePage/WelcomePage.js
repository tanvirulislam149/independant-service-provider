import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const WelcomePage = () => {
    const [currentUser, CurrentUserLoading] = useAuthState(auth);

    return (
        <div>
            <div className='text-center' style={{ marginTop: "150px" }}>
                <h1>Welcome {currentUser?.displayName}</h1>
                <h4>It is DENTCARE conducted by Dr. Mills River </h4>
                <h4>A Professional Dentist For Your Teeth Problem</h4>
            </div>
        </div>
    );
};

export default WelcomePage;