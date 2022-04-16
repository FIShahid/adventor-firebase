import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Adventure Travelers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>    
        
        );
};

export default Header;