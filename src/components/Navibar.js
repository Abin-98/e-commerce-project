import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
const Navibar = (props) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav></Nav>
      </Navbar>
        <Button variant="outline-light" className="cart">
          Cart <span className="cart-btn"> 0 </span>
        </Button>
    </>
  );
};

export default Navibar;
