import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Headerrb = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" >
        <Container style={{maxWidth:"1436px"}}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto bn">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className='nm'>
          <Nav.Link href="#home">Home</Nav.Link>
            
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Headerrb