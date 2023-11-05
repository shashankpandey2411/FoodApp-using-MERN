import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h3 className="text-light">
          <LinkContainer to="/" activeClassName="">
              <Nav.Link>Food Odering System</Nav.Link>
            </LinkContainer>
          </h3>
          <Nav className="ms-auto">
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
