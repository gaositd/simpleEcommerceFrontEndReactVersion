import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Card() {
  return (
    <Container fluid className="mt-5" >
      <Row>
        <Col xs={6}>
          <Form.Control type="text" id="searchBar" name="searchBar" />
        </Col>
        <Col xs={3}>
          <Button variant="light" type="button" id="btnSearch" name="btnSearch">
            Buscar Artículo
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
