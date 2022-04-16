import React from 'react';
import banner from "../../image/banner.jpg";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <img className='w-100 banner' src={banner} alt="" />
            <div className='banner-text img-fluid'>
                <p className='m-0'>I Care</p>
                <p className='m-0'> About Your</p>
                <p>Smile</p>
            </div>
        </div>
    );
};

export default Banner;