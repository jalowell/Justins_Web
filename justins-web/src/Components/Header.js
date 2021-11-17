import React from "react";
import { Container } from "react-bootstrap";
import '../Styling/Header.css';

/**
 * @brief Builds the Navigation Bar using HTML
 */
export class NavigationBar extends React.Component {
  render() {
    return (
      <>

        <Container className="Title-Container" fluid />
        
        <h1 className="Title">Justin's Portfolio</h1>


      </>
    );
  }
}

// Making the NavigationBar importable
export default NavigationBar;
