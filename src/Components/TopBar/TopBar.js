import React, { Component } from 'react';
import TopBarMenu from './TopBarMenu';
import TopBarSearch from './TopBarSearch';
import './TopBar.css';
import logo from './logo-geckos-13-team.svg';

export default class extends Component {
    render(){
      const menu = ['FEATURED', 'TECHNOLOGY', 'NEWS', 'ENTERTAINMENT', 'DESIGN', 'HEALTH'];
        return(
            <div className = "top-bar">
              <div className = "top-logo">
                <img src={logo} alt = "logo" />
              </div>
              <TopBarMenu menu = {menu} />
              <TopBarSearch />
            </div>
        )
    }
}
