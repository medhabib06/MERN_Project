import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import "../App.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand ><Link className='navbarTitle' to="/">OCCASION</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><Link className='navbarItem' to='/AboutUs'>ABOUT US </Link></Nav.Link>
      <Nav.Link ><Link className='navbarItem' to='/Contact'>CONTACT</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2}><Link className='navbarItem' to='/Cart'>
        CART
        </Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBar;
