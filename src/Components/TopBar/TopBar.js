import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Search from './TopBarSearch';
import Menu from './TopBarMenu';
import logo from './logo-geckos-13-team.svg'
import './TopBar.css';

export default class extends Component {
    render(){
        return(
          <Navbar id = "top-bar" expand = "lg" fixed="top">
            <div className = "logo">
            <NavLink to = {'/'}>
            <Navbar.Brand>
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="Team logo"
              />
            </Navbar.Brand>
            </NavLink>
            </div>
            <Navbar.Toggle className = "toggle-top" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Menu menu = {this.props.menu} />
            <Search />
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
