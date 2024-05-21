import React from "react";
import { Link } from "react-router-dom";

// Bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/q3">
              Question 3
            </Nav.Link>
            <Nav.Link as={Link} to="/q4">
              Question 4
            </Nav.Link>
            <Nav.Link as={Link} to="/q5">
              Question 5
            </Nav.Link>
            <Nav.Link as={Link} to="/q6">
              Question 6
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
