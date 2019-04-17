import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';

export default class extends Component {
    render(){
      const MenuList = (list) => list.map( (x) =>
          <a href = {x}>{x.toUpperCase()}</a>
      );
        return(
            <Nav className = "mr-auto ml-auto flex-wrap menu-bar">
                  {MenuList(this.props.menu)}
            </Nav>
        )
    }
}
