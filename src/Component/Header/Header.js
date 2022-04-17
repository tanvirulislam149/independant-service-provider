import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import "./Header.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

    if (loading) {
    }

    return (
        <div>
            <Navbar className='header fixed-top p-0' expand="lg">
                <Container>
                    <Link to="/" className='text-decoration-none text-dark p-0'>DENT<span className='care nav-logo'>CARE</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className="me-2" to="/">Home</CustomLink>
                            {
                                user ? <Button onClick={handleLogOut} className='m-0 py-0 fw-bold bg-none'>Log Out</Button> :
                                    <CustomLink to="/login">Login</CustomLink>
                            }

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