import React from 'react';
import Banner from './Banner/Banner';
import Feedback from './Feedback/Feedback';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;