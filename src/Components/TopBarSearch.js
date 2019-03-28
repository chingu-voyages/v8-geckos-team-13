import React, {Component} from 'react';
import search from './icon-search.svg'

export default class extends Component {
    render(){
        return(
          <form>
          <img src={search} alt="search icon"/>
            <input type = "text" />
          </form>
        )
    }
}
