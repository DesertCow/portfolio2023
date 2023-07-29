
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

import { useNavigate } from "react-router-dom";

import bootstrap from 'bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// const bootstrap = require('bootstrap')

const Header = () => {

  const navigate = useNavigate();


  const handleLogoClick = async (event) => {
  event.preventDefault();

  console.log("Logo Clicked");
  navigate("/home");
  
  };

  return (

    <header className="Header d-flex justify-content-between ">
      <img src={require("../../img/ClaytonSkaggsDEV_Logo.png")} onClick={(event) => handleLogoClick(event)} className="Logo my-2 mx-2" alt="logo" />
      <Navbar className="d-flex">
        <Container fluid className="mx-5">
          {/* <Navbar.Brand className="mx-5 navBarText" href="/DevPortfolio">Development Portfolio</Navbar.Brand> */}
          <Nav.Link className="navBarText mx-5 text-center" href="/DevPortfolio">Dev Portfolio</Nav.Link>
          {/* <Navbar.Toggle aria-controls="navbar-dark-example" /> */}
          <Navbar.Toggle/>
          <Navbar.Collapse className="navBarText mx-5">
            <Nav>
              <NavDropdown
                title="Media"
                menuVariant="dark"
                className="DropMenu navBarText mx-5"
                >
                  <NavDropdown.Item className="DropMenu p-3" href="/Media/Gallery">Photo Gallery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu p-3" href="/Media/Video">Video Gallery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="DropMenu p-3" href="/Media/Blog">Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Nav.Link className="navBarText mx-5" href="/About">About</Nav.Link>
          <Nav.Link className="navBarText mx-5" href="/Contact">Contact</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );


}


export default Header;


//!========================= EOF =========================