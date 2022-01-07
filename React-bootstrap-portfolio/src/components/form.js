import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class form extends Component {
  render() {
    return (
      <Form action="https://getform.io/f/5aad16db-406d-46a0-bcb7-ef720f0090af" method="POST">
        <Form.Group controlId="formBasicEmail" style={{ marginTop: 20 }}>
          <Form.Label>
            <h5>Email address</h5>
          </Form.Label>
          <Form.Control
          type="email" 
          placeholder="Enter email" 
          name="email" 
          />

          <Form.Text className="text-muted">
            I will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>
            <h5>Name</h5>
          </Form.Label>
          <Form.Control 
          type="text" 
          placeholder="First and Last name" 
          name="name" />
        </Form.Group>

        <Form.Label>
          <h5>Message</h5>
        </Form.Label>
        <InputGroup>
          <Form.Control
            style={{ height: 250 }}
            placeholder="Message me"
            as="textarea"
            aria-label="With textarea"
            name="message"
          />
        </InputGroup>
        <br />
        <Button variant="secondary" type="submit">
          Send me message
        </Button>
      </Form>
    );
  }
}
export default form;
