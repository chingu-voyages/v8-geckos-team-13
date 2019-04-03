import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';

export default class extends Component {
    render(){
      const MenuList = (list) => list.map( (x, i) =>
          <Button variant = "link" key = {i}>{x}</Button>
      );
        return(
            <Nav className = "mr-auto ml-auto flex-wrap menu-bar">
                  {MenuList(this.props.menu)}
            </Nav>
        )
    }
}
