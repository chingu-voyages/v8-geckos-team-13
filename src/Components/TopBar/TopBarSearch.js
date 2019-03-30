import React, { Component } from 'react';
import search from './icon-search.svg'

export default class extends Component {
    render(){
        return(
          <form>
            <input type = "text" />
            <button type ="button" className = "btn btn-link">
              <img src={search} alt="search icon"/>
            </button>
          </form>
        )
    }
}
