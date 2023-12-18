import React from "react";
import { Navbar, Nav} from "react-bootstrap";

import { Outlet,Link } from "react-router-dom";

const Navibar = (props) => {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Nav>
          <Nav.Link as={Link} style={{ padding: "0.5rem 4rem" }} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} style={{ padding: "0.5rem 4rem" }} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={Link} style={{ padding: "0.5rem 4rem" }} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
      
      <Outlet/>
    </>
  );
};

export default Navibar;
