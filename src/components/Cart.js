import React from "react";
import { Button, Container, Row, Col,Image } from "react-bootstrap";

const Cart = (props) => {
    const total=0;
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  return (
    <div className="cart">
      <h3>Cart</h3>
      <Button
        className="cart-close"
        variant="outline-secondary"
        onClick={props.onClose}
      >
        X
      </Button>
        <Container>
          <Row className="g-4">
            <Col sm={5} style={{textAlign:"center"}}><h4>Item</h4></Col>
            <Col style={{textAlign:"center"}}><h4>Price</h4></Col>
            <Col sm={5} style={{textAlign:"center"}}><h4>Quantity</h4></Col>
            <hr></hr>
          </Row>
          
            {cartElements.map((element) => {
              return <Row className="mb-3">
                <Col sm={5} className="item-title-col">
                <Image style={{width:100, height:100}} src={element.imageUrl} thumbnail />
                <span style={{marginLeft:20}}>{element.title}</span>
                </Col>
                <Col>
                {element.price}
                </Col>
                <Col sm={5}>
                <span className="item-quantity">{element.quantity}</span>
                <Button style={{marginLeft:20}} variant="danger">Remove</Button>
                </Col>
                </Row>
            })}
          
        </Container>
        <section >{`Total : $${total}`}</section>
      <span className="purchase-btn">
        <Button variant="primary">Purchase</Button>
      </span>
    </div>
  );
};

export default Cart;
