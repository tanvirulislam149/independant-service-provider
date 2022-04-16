import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar className='header fixed-top p-0' expand="lg">
                <Container>
                    <Navbar.Brand className='nav-logo p-0'>DENT<span className='care nav-logo'>CARE</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;