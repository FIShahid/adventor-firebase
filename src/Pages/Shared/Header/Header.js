import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] =useAuthState(auth);
    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <div className='header sticky top' >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" > 
  <Container>
  <Navbar.Brand as={Link} to="/">Adventure Traveler</Navbar.Brand>
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
     { 
            user ?
                <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut} >Sign Out</button>
            :
          <Nav.Link as={Link} to='/login'>Login</Nav.Link>
     }
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>    
        
        );
};

export default Header;