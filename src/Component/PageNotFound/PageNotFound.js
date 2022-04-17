import React from 'react';
import { Spinner } from 'react-bootstrap';

const PageNotFound = () => {
    return (
        <div className='text-center' style={{ marginTop: "150px" }}>
            {/* <h2>Page Not Found</h2> */}
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div >
    );
};

export default PageNotFound;