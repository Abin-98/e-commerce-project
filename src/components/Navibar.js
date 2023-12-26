import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navibar = (props) => {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Nav>
          <Nav.Link as={NavLink} style={{ padding: "0.5rem 4rem" }} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} style={{ padding: "0.5rem 4rem" }} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} style={{ padding: "0.5rem 4rem" }} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} style={{ padding: "0.5rem 4rem" }} to="/contact">
            Contact-Us
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navibar;
