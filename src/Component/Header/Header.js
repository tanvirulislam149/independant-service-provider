import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar className='header fixed-top p-0' expand="lg">
                <Container>
                    <Link to="/" className='text-decoration-none text-dark p-0'>DENT<span className='care nav-logo'>CARE</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink to="/login">Login</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            <CustomLink to="/about">About Me</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;