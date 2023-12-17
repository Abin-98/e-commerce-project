import React,{useContext} from "react";
import { Button, Container, Row, Col,Image } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  cartCtx.totalAmount = cartCtx.items.reduce((val, item) => {
    return val + Number(item.price) * Number(item.quantity);
  }, 0);
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
            <Col sm={5} style={{textAlign:"center"}}>Item</Col>
            <Col style={{textAlign:"center"}}>Price</Col>
            <Col sm={5} style={{textAlign:"center"}}>Quantity</Col>
            <hr></hr>
          </Row>
          
            {cartCtx.items.map((element) => {
              return <Row className="mb-3" key={element.id}>
                <Col sm={5} className="item-title-col">
                <Image style={{width:100, height:100}} src={element.imageUrl} thumbnail />
                <span style={{marginLeft:20}}>{element.title}</span>
                </Col>
                <Col>
                {element.price}
                </Col>
                <Col sm={5}>
                <span className="item-quantity">{element.quantity}</span>
                <Button style={{marginLeft:20}} variant="danger" onClick={()=>cartCtx.removeItem(element.id)}>Remove</Button>
                </Col>
                </Row>
            })}
          
        </Container>
        <section >{`Total : $${cartCtx.totalAmount}`}</section>
      <span className="purchase-btn">
        <Button variant="primary">Purchase</Button>
      </span>
    </div>
  );
};

export default Cart;
