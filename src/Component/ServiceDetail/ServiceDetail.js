import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowDetail from './ShowDetail/ShowDetail';

const ServiceDetail = () => {
    let { id } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    let detail = services.find(detail => detail.id === id);
    return (
        <div>
            {detail ? < ShowDetail detail={detail}></ShowDetail> : ""}
        </div >
    );

};

export default ServiceDetail;