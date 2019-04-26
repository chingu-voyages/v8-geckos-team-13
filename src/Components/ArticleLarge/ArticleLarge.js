import React, {Component} from 'react';
import {Row, Container, Jumbotron} from 'react-bootstrap';
import { MdLocalPostOffice } from "react-icons/md";

import './ArticleLarge.css';

export default class extends Component {
  render(){
    // Get props from parent component
    const featuredPost = this.props.article;
    // Get image post for inline style
    const jumbotronStyle = {
      backgroundImage: 'url(' + featuredPost.urlToImage + ')',
    }
    // Check if source exists before getting the name
    const postSource = featuredPost && featuredPost.source ? featuredPost.source.name : null;
    // Display a default author name
    const postAuthor = featuredPost.author != null ? featuredPost.author : 'John Doe';

      return(
        <Container>
          <Jumbotron style={jumbotronStyle}>
            <div className="overlay"></div>
            <div className="card__image_icons" id = "icon_large" >
                <Row>
                    <MdLocalPostOffice className="card__image_icons--icon card__image_icons--icon-letter" onClick = {() => this.props.share(featuredPost.url)}/>
                </Row>
            </div>
            <a href={featuredPost.url} target="_blank" rel="noopener noreferrer" title="Read full article">
              <div className="post">
                <p className="post__info  text-uppercase">{postSource}</p>
                <h2 className="post__title">{featuredPost.title}</h2>
                <p className="post__author">{postAuthor}</p>
              </div>
            </a>
        </Jumbotron>
      </Container>
      )
  }
}
