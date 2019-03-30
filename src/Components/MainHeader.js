//Jennifer
//We use 'class' only if there is 'state' involved, otherwise there will be just normal 'function' exported..for now i will made everything a class cus i(we) don't know what the functionality will look like
//if there is a need (and there will be) for sub-component, then, if there is no state involved (if ur sub-component does not contain state)-make everything that u can a sub-component,ie try to modularize ur components as much as posibble - make it a function and place it in the same file as ur main component, otherwise make a new folder for ur entire component in Components folder and place everything related to ur component there (component, sub-component/s and css files), and then change ur routes in all the places where u import/use it

import React, {Component} from 'react';
import './MainHeader.css';

export default function MainHeader(props) {
    return (
        <div className="main-header container  text-center">
            <h1 className="main-header__title">Featured</h1>
            <p className="main-header__text">A selection of what you follow</p>
        </div>
    )
} 