import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'

const Header=()=> {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
  <Container>
    <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home"><i className="fa-solid fa-cart-shopping"></i>&nbsp;cart</Nav.Link>
        <Nav.Link href="#link"><i className="fa-solid fa-user"></i>&nbsp;signin</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

export default Header;