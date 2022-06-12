import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";
import logo from "../assets/pic/logo.png";
import { FaShoppingCart, FaAlignLeft } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Wrapper>
      <Navbar bg="light" expand="sm" className="d-flex p-3 mb-3">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link href="#action1" className="link">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="link">
                  About
                </Nav.Link>
                <NavDropdown
                  title="Products"
                  id="offcanvasNavbarDropdown-expand-sm"
                  className="link"
                >
                  <NavDropdown.Item href="#action3">Guitar</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Bass</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Drums</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Keyboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="cart-container">
                <FaShoppingCart className="cart-icon" />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .link {
    font-size: 2rem;
    margin-right: 3rem;
  }
  img {
    height: 6rem;
  }
  .cart-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-icon {
    font-size: 3rem;
  }
`;
export default NavbarComponent;
