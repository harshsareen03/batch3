import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import  { LinkContainer } from 'react-router-bootstrap';

export default function Headerb() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
           <LinkContainer to='/'> 
           <Nav.Link >Home</Nav.Link>
           </LinkContainer>
           <LinkContainer to='/about'><Nav.Link >abouts</Nav.Link></LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
