import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./About.css";
import Bottom from "../Bottom/Bottom";
import Abimg from "./Abimg.jpg";
import abcam from "./abcam.jpg";
export const About = () => {
  return (
    <div>
      <div>
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
          <img className="About-img" src={Abimg} alt="abimg" />
          <Row>
            <h1 className="Aba">About me</h1>
          </Row>
          <Row>
            <h1 className="Abb">James Lauderdale</h1>
          </Row>
          <Row>
            <h1 className="Abc">
              I’ve been working as a professional wedding photographer all my
              adult life. Right after my graduation from the New England School
              of Photography in Boston, MA I began doing my gigs. After first
              few years of working for an event agency and with dozens of
              beautiful wedding sets in my portfolio, I decided to give it a go
              and opened up my very own wedding photography service.
            </h1>
          </Row>
          <Row>
            <h1 className="Abd">This is how Focussity was born…</h1>
          </Row>
          <Row>
            <h1 className="Abe">
              Since then I attended numerous weddings across the US and
              overseas, where I was blessed to work with the most beautiful
              couples and the most diverse wedding themes. While capturing it
              all on film, of course!
            </h1>
          </Row>
          <Row>
            <h1 className="Abf">
              Professional equipment I use when doing wedding photography…
            </h1>
          </Row>
          <img className="cam" src={abcam} alt="camera" />
          <Row className="equip">
            <Col>Canon 5d mark III</Col>
            <Col>Canon EF 16-35mm f/2.8L II USM</Col>
            <Col>Canon Speedlite 600EX-RT</Col>
          </Row>
          <Row className="equip">
            <Col>Canon EOS 7D Mark II</Col>
            <Col>Canon EF 24-70mm f/2.8</Col>
            <Col>PocketWizard PWP-TR 801-125 PLUS II</Col>
          </Row>
          <Row className="equip">
            <Col>Canon EF 11-24mm f/1.4</Col>
            <Col>Canon EF 70-200mm f/2.8 zoom</Col>
            <Col>iMac 5k</Col>
          </Row>
          <Row className="abbot"></Row>
        </Container>
      </div>
      <Bottom />
    </div>
  );
};
export default About;
