import React from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { LocalCard } from "./card";
import "../../header/logo/image.css";

export function Cards() {
  const data = useSelector((state) => state.getData);
  return (
    <Container fluid="true" className="m-5">
      <Row fluid="true" >
      {data.map((dat, i) => (
        <LocalCard
          key={i}
          data={dat}
        /> 
      ))}
      <LocalCard />
      </Row>
    </Container>
  );
}
