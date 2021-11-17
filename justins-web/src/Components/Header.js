import React from "react";
import { Container } from "react-bootstrap";
import '../Styling/NavigationBar.css';

/**
 * @brief Builds the Navigation Bar using HTML
 */
export class NavigationBar extends React.Component {
  render() {
    return (
      <>
      
      <Container className = "Title-Container">
          <h1 className = "Title">Justin's Portfolio</h1>
      </Container>
        
      </>
    );
  }
}

// Making the NavigationBar importable
export default NavigationBar;
