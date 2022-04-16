import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='container mb-5'>
            <h1 className='text-center my-5 text-primary fw-bolder'>Services</h1>
            <Row xs={1} md={3} className="g-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;