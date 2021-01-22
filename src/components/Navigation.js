import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }

`;

export const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">POH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/Game">Game</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)