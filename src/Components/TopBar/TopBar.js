import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Search from './TopBarSearch';
import Menu from './TopBarMenu';
import logo from './logo-geckos-13-team.svg'
import './TopBar.css';

export default class extends Component {
    render(){
      const menu = ['FEATURED', 'TECHNOLOGY', 'NEWS', 'ENTERTAINMENT', 'DESIGN', 'HEALTH'];
        return(
          <Navbar id = "top-bar" expand = "md" fixed="sticky">
            <div className = "logo">
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="Team logo"
              />
            </Navbar.Brand>
            </div>
            <Navbar.Toggle className = "toggle-top" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Menu menu = {menu} />
            <Search />
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
