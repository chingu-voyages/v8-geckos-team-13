import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import search from './icon-search.svg';

export default class extends Component {
    render(){
        return(
            <Form className = "form-search">
              <FormControl type="text" placeholder="Search" id = "search-input"   />
              <Button variant="link"><img src = {search} alt = "Search" /></Button>
            </Form>
        )
    }
}
