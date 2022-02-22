import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const Header = () => {
  return (
    <div className="bpic">
      <Container>
        <Row>
          <h1 className="title"> The P Studio</h1>
        </Row>
        <Row className="nb">
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
        <Row className="title2">Wedding Photography And Videography</Row>
        <Row className="brief">
          We're capturing the best moments on film , while each time
          representing a unique standpoint.
        </Row>
      </Container>
    </div>
  );
};
export default Header;
