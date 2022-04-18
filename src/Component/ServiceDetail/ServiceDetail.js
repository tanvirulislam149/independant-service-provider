import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import PageNotFound from '../PageNotFound/PageNotFound';
import ShowDetail from './ShowDetail/ShowDetail';

const ServiceDetail = () => {
    let { serviceId } = useParams();

    const [services, setServices] = useState("");

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    if (services) {
        let detail = services.find(detail => detail.id === serviceId);
        return (
            <div>
                {detail ? < ShowDetail detail={detail}></ShowDetail> : <PageNotFound></PageNotFound>}
            </div >
        );
    }
    else {
        return <Loading></Loading>;
    }

};

export default ServiceDetail;