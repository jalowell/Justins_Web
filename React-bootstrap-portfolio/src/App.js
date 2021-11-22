import React from "react";
import Main from "./components/main";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar
        className="topnav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={NavLink} to="/">
          Justin Lowell
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapsedNav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/resume" className="navBarElement">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutme" className="navBarElement">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="navBarElement">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="navBarElement">
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="page-content">
        <Main />
      </div>

      <div>
        <Navbar
          className="justify-content-md-center color-footer"
          sticky="bottom"
          expand="lg"
          variant="light"
        >
          <Navbar.Brand>
            <h6 className="text-muted">
              &copy;{new Date().getFullYear()} Justin Lowell
            </h6>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
