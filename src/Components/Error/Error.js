import React from 'react';
import './Error.css';
import { Button } from 'react-bootstrap';
import logo from '../TopBar/logo-geckos-13-team.svg';

export default function Error(props) {
  return (
    <div className = "error-container">
      <a href = "/"><img src = {logo} alt = "logo"/></a>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Button variant = "primary" size = "sm" className = "mt-2" onClick = {() => window.history.back()}>BACK</Button>
    </div>
  )
}
