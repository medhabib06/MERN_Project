import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import "../App.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/">OCCASION</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><Link to='/AboutUs'>ABOUT US </Link></Nav.Link>
      <Nav.Link ><Link to='/Contact'>CONTACT</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2}><Link to='/Cart'>
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
