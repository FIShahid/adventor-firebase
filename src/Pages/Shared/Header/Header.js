import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header sticky top' >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" > 
  <Container>
  <Navbar.Brand as={Link} to="/">Adventure Travelers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      {/* <Nav.Link as={Link} to='/services'>Services</Nav.Link> */}
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="home#reviews">Reviews</Nav.Link>
      <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
      <Nav.Link as={Link} to='/aboutme'>About Me</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/login'>Login</Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>    
        
        );
};

export default Header;