import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./Ask.css";
export const Ask = () => {
  const [status, setStatus] = useState(false);
  const [status1, setStatus1] = useState(true);
  return (
    <div className="Askmain">
      <Container>
        <Row>
          <h1 className="Aska">Check available booking dates</h1>
        </Row>
        <Row>
          <h1 className="Askb">
            As I am the only photographer working in the studio, I have to
            evaluate all my ordeals beforehand.
          </h1>
        </Row>
        <Row>
          <h1 className="Askc">
            I will appreciate as many details about your particular wedding
            venue, dates, theme and other aspects, as you’d be willing to share.
            As soon as I review the booking information, I will be giving you my
            feedback immediately!
          </h1>
        </Row>
      </Container>
      <div className="Askf">
        <Form>
          <Form.Group controlId="name">
            <Form.Control
              type="name"
              //value={name}
              placeholder="Enter name"
              //onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              //value={email}
              placeholder="Email"
              //onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              //value={password}
              placeholder="Event Date and Time"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              //value={password}
              placeholder="Ask me"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {status1 ? (
            <Button
              onClick={() => {
                setStatus(!status);
                setStatus1(!status1);
              }}
              variant="primary"
            >
              Check
            </Button>
          ) : null}
        </Form>
        <div className="Success">
          {status ? (
            <Container>
              <Row>
                <h1 className="success1">Query Submitted Successfully</h1>
              </Row>
              <Row>
                <h1 className="success2">
                  We will answer you shortly through Email
                </h1>
              </Row>
              <Row>
                <h1 className="success3">
                  Please feel free to Ask more queries{" "}
                </h1>
              </Row>
            </Container>
          ) : null}
        </div>
        {status ? (
          <Button
            onClick={() => {
              setStatus(!status);
              setStatus1(!status1);
            }}
            variant="primary"
            type="submit"
          >
            Ask more
          </Button>
        ) : null}
      </div>
    </div>
  );
};
export default Ask;
