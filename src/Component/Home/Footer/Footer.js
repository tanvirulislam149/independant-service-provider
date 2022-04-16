import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='container text-center'>
                <p className='nav-logo p-0 my-2'>DENT<span className='care nav-logo'>CARE</span></p>
                <p className='mb-2'>All Rights Reserves to DENTCARE</p>
                <p className='mb-0'>Copyright <FontAwesomeIcon icon={faCopyright} /> {year}</p>
            </div>
        </div>
    );
};

export default Footer;