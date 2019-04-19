import React, {Component} from 'react';
import {Container, Jumbotron, Button, Col, Row, Image} from 'react-bootstrap';
import './ArticleLarge.css';

export default class extends Component {
  render(){
    const featuredPost = this.props.article;
    const jumbotronStyle = {
      backgroundImage: 'url(' + featuredPost.urlToImage + ')',
    }
    // console.log(featuredPost.source);
      return(
        <Container>
          <Jumbotron style={jumbotronStyle}>
            <div className="overlay"></div>
            <div className="post">
              <div className="post__info">
                <Row>
                  <Col xs="1" md="1" lg="1"><Image src="holder.js/30x30" roundedCircle /></Col>
                  <Col><p></p></Col>
                </Row>
              </div>
              <h2 className="post__title">{featuredPost.title}</h2>
              <p className="post__author">{featuredPost.author != null ? featuredPost.author : 'John Doe'}</p>
              <Button variant="link">Add comment</Button>
            </div>
        </Jumbotron>
      </Container>
      )  
  }
}