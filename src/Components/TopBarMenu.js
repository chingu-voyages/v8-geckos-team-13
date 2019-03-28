import React, {Component} from 'react';

export default class extends Component {
    render(){
      const menuList = (list) => list.map((item, index) => {
        const keyId = `menu-${index}`;
        return <li key = {keyId}><button type ="button" class = "btn btn-link">{item}</button></li>;
      });
      return(
        <ul>
          {menuList(this.props.menu)}
        </ul>
      )
    }
}
