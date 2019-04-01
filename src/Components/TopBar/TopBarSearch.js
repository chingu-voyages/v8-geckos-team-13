import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

export default class extends Component {
    render(){
        return(
            <Form className = "form-search">
              <FormControl type="text" placeholder="Search" className="mr-sm-2"   />
              <Button variant="outline-success">Search</Button>
            </Form>
        )
    }
}
