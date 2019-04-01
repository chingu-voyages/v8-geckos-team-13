import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export default class extends Component {
    render(){
      const MenuList = (list) => list.map( (x, i) =>
          <Nav.Link key = {i} href={x}>{x}</Nav.Link>
      );
        return(
            <Nav className = "mr-auto ml-auto flex-wrap menu-bar">
                  {MenuList(this.props.menu)}
            </Nav>
        )
    }
}
