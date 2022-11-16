import React from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";

import { LocalCard } from "./card";
import "../../header/logo/image.css";

export function Cards() {
  const data = useSelector((state) => state.getData);
  return (
    <Container fluid="true" className="mt-5">
      {console.log(typeof data)}
      {data.forEach((dat) => (
        <h1>123{dat}</h1>
      ))}
      <LocalCard />
    </Container>
  );
}
