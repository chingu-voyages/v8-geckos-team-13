import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import search from './icon-search.svg';

export default class extends Component {
    state = {
      input: ""
    }

    handleChange = (e) => {
      this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.input === "") {
        return;
      }
      this.props.search(this.state.input, "search");
      this.setState({input: ""});
    }

    render(){
        return(
            <Form onSubmit = {this.handleSubmit} className = "form-search">
              <FormControl type="text" name = "search"
              value = {this.state.input}
              onChange = {this.handleChange}
              placeholder="Search" id = "search-input"   />
              <Button type = "submit" variant="link"><img src = {search} alt = "Search" /></Button>
            </Form>
        )
    }
}
