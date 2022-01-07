import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Form from "./form";
import Table from "react-bootstrap/Table";
import SocialFollow from "./SocialFollow";

export default class contact extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <h2>Contact Me </h2>
            <hr />

            <Table striped bordered hover variant="light" responsive>
              <tr>
                <th>Name</th>
                <td>Justin Lowell</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>
                  <a className="link">
                    434-221-1019
                  </a>
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <a
                    className="link email"
                    href="mailto: jalowell98@gmail.com"
                  >
                    jalowell98@gmail.com
                  </a>
                </td>
              </tr>
            </Table>
            <br />
            <br />
            <br />
            <h2>Follow me on Social Media:</h2>
            <SocialFollow />
          </Col>
          <Col xs={12} md={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    );
  }
}
