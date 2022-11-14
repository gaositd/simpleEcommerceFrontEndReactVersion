import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import sadFace from '../../../images/sad-crying-face-clip-art-8.jpg';
import '../../header/logo/image.css';

export function Cards() {
  const [data, setData] = useState();

  useEffect(() =>{
    fetch("http://localhost:3456/allproducts", {
    method: "GET",
    body: JSON.stringify(data),
  })
  .then(resp => resp.json())
  .then(resp => setData(resp))
  .catch(err => alert(err));
  });

  return (
    <Container fluid className="mt-5">
      { data ? (
        <Row fluid>
          <Col xs={13}>
            <Card.Title> {data[50].id} </Card.Title>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={12}>
            <Card.Title>
              <img src={sadFace} alt="cortesía de https://clipground.com/" className="imgSize" />
            </Card.Title>
          </Col>
        </Row>
      )}
    </Container>
  );
}
