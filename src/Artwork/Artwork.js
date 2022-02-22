import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Artwork.css";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import p6 from "./p6.jpg";
import p7 from "./p7.jpg";
import p8 from "./p8.jpg";

export const Artwork = () => {
  return (
    <div className="Am">
      <div>
        <Row>
          <h1 className="Aa">Photograpgy Artwork Examples</h1>
        </Row>
        <Row>
          <h1 className="Ab">
            See the best shots, that we’ve arranged into a portfolio
          </h1>
        </Row>
      </div>
      <div className="Aimages">
        <img className="Ai" src={p1} alt="i1" />
        <img className="Ai" src={p2} />
        <img className="Ai" src={p3} />
        <img className="Ai" src={p4} />
        <img className="Ai" src={p5} />
        <img className="Ai" src={p6} />
        <img className="Ai" src={p7} />
        <img className="Ai" src={p8} />
      </div>
    </div>
  );
};
export default Artwork;
