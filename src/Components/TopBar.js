//This component should do Abdul or James
//We use 'class' only if there is 'state' involved, otherwise there will be just normal 'function' exported..for now i will made everything a class cus i(we) don't know what the functionality will look like
//if there is a need (and there will be) for sub-component, then, if there is no state involved (if ur sub-component does not contain state)-make everything that u can a sub-component,ie try to modularize ur components as much as posibble - make it a function and place it in the same folder as ur main component, otherwise make a new folder for ur entire component in Components folder and place everything related to ur component there (component, sub-component/s and css files), and then change ur routes in all the places where u import/use it
import React, {Component} from 'react';

export default class extends Component {
    render(){
        return(
            <div>
                 TopBar
             </div>
        )  
    }
}