import React, { Component } from 'react';
import TopBarItem from './TopBarItem';

export default class extends Component {
    render(){
      const menuList = (list) => list.map((item, index) => {
        return <TopBarItem key = {index} item = {item}/>
      });
      return(
        <ul>
          {menuList(this.props.menu)}
        </ul>
      )
    }
}
