import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

/**
 * @brief Builds the Navigation Bar using HTML
 */
export class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#">Justin Lowell Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Schedule" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#/lab-request-form">
                  Request Lab Time
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-needed" disabled>
                  Lab Evaluation Form
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/action-needed" disabled>
                  View Calendar
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-needed" disabled>
                  Search Capabilities
                </NavDropdown.Item>
              </NavDropdown>
              {/* The Metrics*/}
              <Nav.Link disabled href="#/action-needed">
                Metrics
              </Nav.Link>
            </Nav>
            <Nav>
              {/* The Admin drop down */}
              <NavDropdown title="Scheduler" id="collasible-nav-dropdown">
                <NavDropdown.Item disabled href="#/action-needed">
                  Manage Lab Requests
                </NavDropdown.Item>
                <NavDropdown.Item disabled href="#/action-needed">
                  Lab Evaluation Feedback
                </NavDropdown.Item>
              </NavDropdown>
              {/* The Admin drop down */}
              <NavDropdown title="Admin" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#/user-management">
                  User Management
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-needed4" disabled>
                  Manage Labs and Resources
                </NavDropdown.Item>
                <NavDropdown.Item href="#/requests">
                  Manage Requests
                </NavDropdown.Item>
                <NavDropdown.Item href="#/lab-data-list" disabled>
                  Deconflict Lab Time
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-needed2" disabled>
                  Funding
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-needed3" disabled>
                  Notifications
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#/user-profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item disabled href="#/action-needed">
                  My Lab Requests
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

// Making the NavigationBar importable
export default NavigationBar;
