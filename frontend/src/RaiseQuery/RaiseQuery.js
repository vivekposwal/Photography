import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./RaiseQuery.css";
import { useDispatch, useSelector } from "react-redux";
import { createQueryAction } from "../actions/queryActions";

function RaiseQuery({ history }) {
  const [status, setStatus] = useState(false);
  const [status1, setStatus1] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DnT, setDnT] = useState("");
  const [ask, setAsk] = useState("");
  const dispatch = useDispatch();
  const queryCreate = useSelector((state) => state.queryCreate);
  const { loading, query, error } = queryCreate;
  console.log(query);

  const resetHandler = () => {
    setName("");
    setEmail("");
    setDnT("");
    setAsk("");
  };
  const hide = () => {
    setStatus(!status);
    setStatus1(!status1);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !DnT || !ask) return;
    dispatch(createQueryAction(name, email, DnT, ask));
    resetHandler();
    history.push("/");
  };

  useEffect(() => {}, []);
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
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Control
              type="content"
              value={DnT}
              placeholder="Event Date and Time"
              onChange={(e) => setDnT(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Control
              type="content"
              value={ask}
              placeholder="Ask me"
              onChange={(e) => setAsk(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary" onClick={hide}>
            Check
          </Button>
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
            //type="submit"
          >
            Ask more
          </Button>
        ) : null}
      </div>
    </div>
  );
}
export default RaiseQuery;
