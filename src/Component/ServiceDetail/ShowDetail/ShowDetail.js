import React from 'react';
import "./ShowDetail.css";

const ShowDetail = (props) => {
    const { name, picture, price, shortText, description } = props?.detail;
    return (
        <div className='mt-5 container '>
            <h2 className='my-3 text-center text-primary'>Know More About This Service</h2>
            <div className='d-lg-flex'>
                <div className='w-100'>
                    <img className='w-100 mx-auto' src={picture} alt="" />
                </div>
                <div className='w-100 w-lg-50 ms-lg-4'>
                    <h3 className='text-primary text-center'>{name}</h3>
                    <h4 className='text-center'>Price: ${price}</h4>
                    <h5 className='text-center'>{shortText}</h5>
                    <h3 className='text-primary text-center'>Description</h3>
                    <h5 className='description'>{description}</h5>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;