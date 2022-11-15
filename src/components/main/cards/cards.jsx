import React from "react";

import Container from "react-bootstrap/Container";

import { LocalCard } from "./card";
import "../../header/logo/image.css";

export function Cards() {
  return (
    <Container fluid className="mt-5">
      <LocalCard />
    </Container>
  );
}
