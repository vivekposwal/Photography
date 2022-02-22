import React from "react";
import "./Mid.css";
import border1 from "./border1.jpg";
import { Container, Row, Col } from "react-bootstrap";

export const Mid = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <h1 className="a">I am a Wedding Photographer</h1>
        </Row>
        <Row>
          <h1 className="b">Lucas Bright</h1>
        </Row>
        <img className="i" src={border1} alt="image" />
        <Row>
          <h1 className="c">
            I’ve been working as a professional wedding photographer all my
            adult life.
          </h1>
        </Row>
        <Row>
          <h1 className="d">
            Right after my graduation from the New England School of Photography
            in Boston, MA I began doing my gigs. After first few years of
            working at the event agency and with dozens of beautiful wedding
            sets already in my portfolio, I decided to give it a go and opened
            up my very own wedding photography service.
          </h1>
        </Row>
      </Container>
    </div>
  );
};
export default Mid;
