import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class extends Component {
    render(){
      const MenuList = (list) => list.map( (x) =>
          <Link to = {x}>{x.toUpperCase()}</Link>
      );
        return(
            <Nav className = "mr-auto ml-auto flex-wrap menu-bar">
                  {MenuList(this.props.menu)}
            </Nav>
        )
    }
}
