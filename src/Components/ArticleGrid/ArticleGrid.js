//Georgi

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, Container, Row} from 'react-bootstrap';
import { MdLocalPostOffice } from "react-icons/md";
import './ArticleGrid.css';



export default class extends Component {
    render(){
            const category = this.props.category;
            const posts = this.props.articles;
            const limit = 230;
            return(
                <Container>
                    <Row className="justify-content-md-start">
                        {posts.map( (el, index) =>
                            <Card className="card  shadow" key={index}>
                            <a href={el.url} target="_blank" className="card__image_link" rel="noopener noreferrer">
                                <Card.Img variant="top" src={el.urlToImage} className="card__image"/>
                            </a>
                                <div className="card__image_icons">
                                    <Row>
                                        <MdLocalPostOffice className="card__image_icons--icon card__image_icons--icon-letter" onClick = {() => this.props.share(el.url)}/>
                                    </Row>
                                </div>

                                    <Card.Body className="card__body">
                                        <Card.Subtitle className = "card__body_source">{el.source.name}</Card.Subtitle>
                                        <Link to={`/${category}`} className="card__body_category  text-uppercase">{category}</Link>
                                        <a href={el.url} className="card__body_title" target="_blank" rel="noopener noreferrer">
                                            <Card.Title>{el.title}</Card.Title>
                                        </a>
                                        <Card.Subtitle className="card__body_author">{el.author}</Card.Subtitle>
                                        <Card.Text className="card__body_text">{el.content = el.content ? el.content.substring(0, limit) + '...' : el.description}</Card.Text>
                                    </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Container>

        )
    }
}
