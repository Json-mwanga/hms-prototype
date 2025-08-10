import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar: React.FC = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <BootstrapNavbar.Brand href="#home">MyApp</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;