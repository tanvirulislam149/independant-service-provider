import React from 'react';
import banner from "../../../image/banner.jpg";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <img className='w-100 banner' src={banner} alt="" />
            <div className='banner-text img-fluid'>
                <p className='m-0'>I Care</p>
                <p className='m-0'> About Your</p>
                <p>Smile.</p>
                <h1 className='m-0 text-white fw-bold'>Dr. Mills River</h1>
                <h4>Oral and Dental Surgeon</h4>
            </div>
        </div>
    );
};

export default Banner;