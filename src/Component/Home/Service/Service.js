import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const { id, name, price, picture, shortText } = props.service;

    const navigate = useNavigate();
    const seeMore = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div>
            <Col className='card border-0'>
                <Card className='border-0'>
                    <Card.Img className='card-img' variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title className='text-primary fw-bold'>{name}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                        <Card.Text>{shortText}</Card.Text>
                    </Card.Body>
                </Card>
                <button onClick={() => seeMore(id)} className='border-0 bg-primary w-50 py-1 rounded-pill mx-auto fw-bold text-white'>See More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </Col>
        </div>
    );
};

export default Service;