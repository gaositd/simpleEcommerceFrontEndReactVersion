import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// import sadFace from "../../../images/sad-crying-face-clip-art-8.jpg";

// export function LocalCard({data}) {
export const LocalCard = (data) =>{
  
  return (
    <React.Fragment>
      {
        data.data
          ? <Col md={3}>
              <Card.Title>{data.data.name}</Card.Title>
            </Col>
          :null
      }
  </React.Fragment>
  );
}
