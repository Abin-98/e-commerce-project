import React , {useContext} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
const Navibar = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfItems=cartCtx.items.reduce((val,item)=>{
    return val+Number(item.quantity);
  },0)
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Nav>
          <Nav.Link style={{padding:'0.5rem 4rem'}} href="#home">Home</Nav.Link>
          <Nav.Link style={{padding:'0.5rem 4rem'}} href="#store">Store</Nav.Link>
          <Nav.Link style={{padding:'0.5rem 4rem'}} href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
        <Button onClick={props.onShow} variant="outline-light" className="cart-btn">
          Cart <span className="cart-number"> {numberOfItems} </span>
        </Button>
    </>
  );
};

export default Navibar;
