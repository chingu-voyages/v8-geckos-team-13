import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import search from './icon-search.svg';

export default class extends Component {
    render(){
        return(
            <Form className = "form-search">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" id = "search-input"   />
              <Button className = "search-button" variant="light"><img src = {search} alt = "Search" /></Button>
            </Form>
        )
    }
}
