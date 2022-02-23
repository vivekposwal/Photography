import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./Services.css";
import serimg from "./serimg.jpg";

export const Services = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1 className="Cont-title"> The P Studio</h1>
        </Row>
        <Row className="Cont-nb">
          <Col>
            <Link to="/">Home</Link>
          </Col>
          <Col>
            <Link to="/services">Services</Link>
          </Col>
          <Col>
            <Link to="/About">About</Link>
          </Col>
          <Col>
            <Link to="/Contact">Contact</Link>
          </Col>
        </Row>
        <Row>
          <h1 className="sera">What do we offer...</h1>
        </Row>
        <img
          className="ser-img"
          Style={{ width: "300px" }}
          src={serimg}
          alt="servicesimg"
        />
        <Row className="serc">
          <h1 className="serb">Photography for any occasion</h1>
        </Row>
        <Row className="sere">
          <h1 className="serd">
            Besides doing straightforward wedding photography, we also offer a
            number of additional services, such as: – Engagements photography –
            Beauty portraits – Family portraits – Love Stories – Baby Showers
          </h1>
        </Row>
        <Row className="serf">
          <h1 className="serg">
            So feel free to choose whatever your current occasion is and please
            book my services in advance
          </h1>
        </Row>
        <Row />
      </Container>
    </div>
  );
};
export default Services;
