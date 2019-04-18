import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class extends Component {
    render(){
      const MenuList = (list) => list.map( (x, i) =>
          <NavLink to = {`/${x}`} key = {i}>
          {x.toUpperCase()}
          </NavLink>
      );
        return(
            <Nav className = "mr-auto ml-auto flex-wrap menu-bar">
                  {MenuList(this.props.menu)}
            </Nav>
        )
    }
}
