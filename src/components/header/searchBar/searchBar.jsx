import React, { useState } from "react";
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchBar() {
  const products = useSelector(state => state.getData);
  const [text, setText] = useState("");

  const handleChange = (e) =>{
    setText({
      ...text,
      [e.target.name] : e.target.value
    })
  }

  const getData = (text) =>{
    let aux = ""
    products.filter(product => (
      product.name.toUpperCase().includes(text.toUpperCase()))
        ? aux += `${product.name}<br />`
        :null
      );
    
    return aux;
  }

  function showSwal(){
    const showProducts = getData(text.searchBar);

    showProducts
      ?Swal.fire({
        title:"Productos encontrados",
        html:showProducts,
        icon:"success",
        confirmButtonAriaLabel:"OK",
        confirmButtonText:"OK"
      })
      :Swal.fire({
        title:"Productos no encontrados",
        text:"",
        icon:'error',
        confirmButtonAriaLabel:"OK",
        confirmButtonText:"OK"
      })
  }

  return (
    <Container fluid>
      <Form>
        <Row>
          <Col xs={6}>
            <Form.Control
              type="text"
              id="searchBar"
              name="searchBar"
              onChange={handleChange}
            />
          </Col>
          <Col xs={3}>
            <Button
              variant="light"
              type="button"
              id="btnSearch"
              name="btnSearch"
              onClick={showSwal}
            >
              Buscar Artículo
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchBar;
