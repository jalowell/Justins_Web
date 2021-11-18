import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import { Col, Row } from "react-bootstrap";
// import SocialFollow from "./SocialFollow";

export default class aboutme extends Component {
  render() {
    return (
      <Media>
        <Row>
          <Col md={4} xs={12} fluid>
            <Image
              width={380}
              height={1050}
              className="ml-6 img"
              src={require("./assets/about.jpeg")}
              alt="Generic placeholder"
              fluid
              thumbnail
            />
            <br />
            {/* <SocialFollow /> Can add back in if wanted */}
          </Col>

          <Col md={8} xs={12}>
            <Media.Body className="text-aboutme">
              <h2>About me</h2>
              {/* <h4>
                My mission is to help businesses take advantage of current
                technology.
              </h4> */}

              <p>
                I got my Bachelor of Science in Computer Science from Liberty University in May of 2021. I graduated with a concentration in Cyber Security
                  and Web and Mobile Development. Currently, I work for the DoD as a DevSecOps Engineer.
              </p>
              <p>
                I enjoy doing any activity that involves the outdoors and more specifically the ocean. My hobbies include...
              </p>
              <p>
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.” ― Martin
                Fowler I enjoy turning complex problems into simple, beautiful
                designs and clean elegant and efficient code.
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
    );
  }
}
