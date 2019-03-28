//Abdul/James
//if there is a need (and there will be) for sub-component, then, if there is no state involved (if ur sub-component does not contain state) make it a function and place it in the same folder as ur main component, otherwise make a new folder for ur entire component in Components folder and place everything related to ur component there (component, sub-component/s and css files), and then change ur routes in all the places where u import/use it

import React, {Component} from 'react';

export default class extends Component {
    render(){
        return(
            <div>
                 Article Large
             </div>
        )  
    }
}