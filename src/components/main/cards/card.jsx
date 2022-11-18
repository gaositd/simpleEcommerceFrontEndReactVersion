import React from "react";
import Swal from 'sweetalert2';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import sadFace from "../../../images/sad-crying-face-clip-art-8.jpg";

export const GetPrice = (discount, price)=>{
  let newPrice = 0;
  if(discount.discount === 0){
    return discount.price.toFixed(2);
  }else{
    newPrice = discount.price - (discount.price * (discount.discount / 100));
    return newPrice.toFixed(2);
  }
}
// export function LocalCard({data}) {
export const LocalCard = (data) => {

  function getImagePath(imgPath){
    let newPath = "";

    imgPath
      ? newPath = imgPath
      :  newPath = sadFace

    return newPath;
  }

  function showAddProduct (value){
    Swal.fire({
      title:"Producto Agregado",
      text:value,
      icon:"success",
      confirmButtonAriaLabel:"OK",
      confirmButtonText:"OK"
    });
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
                {/* {
                  () => getPrice(data.data.discount, data.data.price)
                } */}
                <GetPrice
                  discount={data.data.discount}
                  price={data.data.price}
                />
              </Card.Text>
              <Button
                variant="light"
                onClick={() => showAddProduct(data.data.name)}
                className="h-30"
              >
                <b>Comprar producto</b>
              </Button>
            </Card.Body>
          </Card>
          : null
      }
    </React.Fragment>
  );
}
