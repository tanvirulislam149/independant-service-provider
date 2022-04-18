import React from 'react';

const Feedback = () => {
    return (
        <div className='text-dark my-5 text-center'>
            <h1 className='text-primary'>Feedback Form</h1>
            <input className='w-25 bg-light border-1 my-2 px-2 py-1 rounded-pill' type="text" name="name" placeholder='Enter Your Name' /> <br />
            <input className='w-25 bg-light border-1 my-2 px-2 py-1 rounded-pill' type="text" name="email" placeholder='Enter Your Email' /> <br />
            <textarea className='bg-light mt-2' name="comment" cols="40" rows="5" placeholder='Enter Your Comment'></textarea> <br />
            <button className='bg-primary fw-bold rounded-pill py-1 px-3 text-white mt-2 border-0 '>Submit</button>
        </div>
    );
};

export default Feedback;