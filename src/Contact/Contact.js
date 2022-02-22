import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Bottom from "../Bottom/Bottom";
import Contactdisplay from "./Contactdisplay.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <div className="Contimg">
        <Container>
          <Row>
            <h1 className="Cont-title"> The P Studio</h1>
          </Row>
          <Row className="Cont-nb">
            <Col>
              <Link to="/">Home</Link>
            </Col>
            <Col>Services</Col>
            <Col>
              <Link to="/About">About</Link>
            </Col>
            <Col>
              <Link to="/Contact">Contact</Link>
            </Col>
          </Row>
          <img
            className="Cont-display"
            src={Contactdisplay}
            alt="wedingimage"
          />
          <Row>
            <h1 className="Conta">Contact me</h1>
          </Row>
          <Row>
            <h1 className="Contb">Phone : 9910820973</h1>
          </Row>
          <Row>
            <h1 className="Contc">Email :Thepstudio@gmail.com</h1>
          </Row>
          <Row className="Conte">
            <h1 className="Contd">
              Make your wedding memories amazing and unforgettable!
            </h1>
          </Row>
        </Container>
      </div>
      <Bottom />
    </div>
  );
};
export default Contact;
