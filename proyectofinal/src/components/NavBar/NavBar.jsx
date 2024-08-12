import React from 'react';
import logo from './logo-jimp.png';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
// import Link from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react';
import useCartContext from '../../store/CartContext.jsx';



function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction  } = useCartContext();
  contextFunction();
    return (
<header>
<nav>
<Navbar expanded={expanded} className="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/"><Navbar.Brand className="swirl-in-fwd"><a href="/"><img className="navbar-brand" src={logo} alt="logo" /></a></Navbar.Brand></LinkContainer>
  
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer onClick={() => setExpanded(false)} to="/inicio"><Nav.Link href="#home">Inicio</Nav.Link></LinkContainer>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
        <LinkContainer onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Smartphones</NavDropdown.Item></LinkContainer>  
        <LinkContainer onClick={() => setExpanded(false)} to="/category/apple"><NavDropdown.Item>Apple</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/samsung"><NavDropdown.Item>Samsung</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/android"><NavDropdown.Item>Android</NavDropdown.Item></LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer onClick={() => setExpanded(false)} to="/category/accesorios"><NavDropdown.Item>Accesorios</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        <LinkContainer onClick={() => setExpanded(false)} to="/novedades"><Nav.Link href="/novedades">Novedades</Nav.Link></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/serviplus"><Nav.Link href="/serviplus">Serviplus</Nav.Link></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/contacto"><Nav.Link href="/contacto">Contacto</Nav.Link></LinkContainer>
        
      </Nav>
      
    </Navbar.Collapse>
    <CartWidget />
  </Container>
  
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;