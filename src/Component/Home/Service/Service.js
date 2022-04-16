import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Service.css";

const Service = (props) => {
    const { name, price, picture, shortText } = props.service;
    return (
        <div>
            <Col className='card border-0'>
                <Card className='border-0'>
                    <Card.Img className='card-img rounded-circle' variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title className='text-primary fw-bold'>{name}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                        <Card.Text>{shortText}</Card.Text>
                    </Card.Body>
                </Card>
                <button className='border-0 bg-primary w-25 rounded-pill mx-auto fw-bold text-white'>See More</button>
            </Col>
        </div>
    );
};

export default Service;