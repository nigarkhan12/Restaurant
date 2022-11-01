import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../../assets/css/main.css";
import { Link } from "react-router-dom";
import restaurant_logo from "../../assets/image/restaurant_logo.png";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="imgstyle" src={restaurant_logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="mainmenu">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/menu" className="mainmenu">
                  Menu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="mainmenu">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="mainmenu">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
