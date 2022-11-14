import React from "react";

import { Logo } from "./logo/logo";
import SearchBar from "./searchBar/searchBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Logo />
            </Col>
            <Col xs={9} className="mt-4">
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </header>
  );
};
