import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import sadFace from "../../../images/sad-crying-face-clip-art-8.jpg";

// export function LocalCard({data}) {
export const LocalCard = (data) => {

  const getPrice = (discount, price)=>{
    let newPrice = 0;
    if(discount === 0){
      return price.toFixed(2);
    }else{
      newPrice = price - (price * (discount / 100));
      return newPrice.toFixed(2);
    }
  }

  function getImagePath(imgPath){
    let newPath = "";

    imgPath
      ? newPath = imgPath
      :  newPath = sadFace

    return newPath;
  }

  return (
    <React.Fragment>
      {
        data.data
          ?
          <Card style={{ width: '18rem' }} className="m-2" >
            <Card.Img variant="top" src={getImagePath(data.data.url_Image)}  />
            <Card.Body className="d-flex flex-column justify-content-between" >
              <Card.Title className="h-30">{data.data.name}</Card.Title>
              <Card.Text className="h-30">
                {
                  () => getPrice(data.data.discount, data.data.price)
                }
              </Card.Text>
              <Button
                variant="light"
                onClick={() => alert("producto agregado")}
                className="h-30"
              >
                <bold>Comprar producto</bold>
              </Button>
            </Card.Body>
          </Card>
          : null
      }
    </React.Fragment>
  );
}
