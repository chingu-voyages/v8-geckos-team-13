import React, { Component } from 'react';
import search from './icon-search.svg'

export default class extends Component {
    render(){
        return(
          <form>
            <button type ="button" className = "btn btn-link">
              <img src={search} alt="search icon"/>
            </button>
            <input type = "text" />
          </form>
        )
    }
}
