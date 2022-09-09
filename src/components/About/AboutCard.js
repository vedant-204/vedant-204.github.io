import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card style={{ width: '400px', align: 'left' }} className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Vedantdev Katyayan </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a sophomore pursuing B.Tech at IIIT Bhopal.
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Once I get on a puzzle, I can't get off."{" "}
          </p>
          <footer className="blockquote-footer">Richard P Feynman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
