import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Search from './TopBarSearch';
import Menu from './TopBarMenu';
import logo from './logo-geckos-13-team.svg'
import './TopBar.css';

export default class extends Component {
    render(){
      const menu = ['FEATURED', 'TECHNOLOGY', 'NEWS', 'ENTERTAINMENT', 'DESIGN', 'HEALTH'];
      const MenuList = (list) => list.map( (x, i) =>
          <Nav.Link key = {i} href={x}>{x}</Nav.Link>
      );
        return(
          <Navbar className = "d-flex" expand = "lg" bg="light" fixed="sticky">
            <Navbar.Brand className = "logo-width" href="#home">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="Team logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Menu menu = {menu} />
            <Search />
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
