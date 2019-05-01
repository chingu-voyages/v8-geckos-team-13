import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import search from './icon-search.svg';

class TopBarSearch extends Component {
    state = {
      input: ""
    }

    handleChange = (e) => {
      this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const search = this.state.input;
      if (search === "") {
        return;
      }
      this.props.history.push(`/search?q=${search}`);
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

export default withRouter(TopBarSearch);
