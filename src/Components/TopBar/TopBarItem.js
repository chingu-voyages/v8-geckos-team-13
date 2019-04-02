import React from 'react';

const TopBarItem = (props) => {
  return (
    <li>
      <button type ="button" className = "btn btn-link">{props.item}</button>
    </li>
  )
}

export default TopBarItem;
