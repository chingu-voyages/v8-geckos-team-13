import React from 'react';
import './MainHeader.css';

export default function MainHeader(props) {
    const title = props.category[0].toUpperCase() + props.category.slice(1);
    return (
        <div className="main-header container  text-center">
            <h1 className="main-header__title">{title}</h1>
            <p className="main-header__text">A selection of what you follow</p>
        </div>
    )
}
