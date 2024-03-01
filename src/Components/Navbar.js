import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
 
const Navigationbar = () => {
    return (
            <Navbar collapseOnSelect expand="md" className="navbar sticky-top" >
                <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        <NavLink className="nav-link" eventKey="1" as={Link} to="/Home">Home</NavLink>
                        <NavLink className="nav-link"  eventKey="2" as={Link} to="/About">About</NavLink>
                        <NavLink className="nav-link"  eventKey="3" as={Link} to="/Portfolio">Portfolio</NavLink>
                        <NavLink className="nav-link"  eventKey="4" as={Link} to="/Contacts">Contacts</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
    );
};
 
export default Navigationbar;