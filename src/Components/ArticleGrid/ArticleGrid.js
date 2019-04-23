//Georgi

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, Container, Row} from 'react-bootstrap';
import {FaHeart, FaPlus } from 'react-icons/fa';
import { MdLocalPostOffice } from "react-icons/md";
import './ArticleGrid.css';



export default class extends Component {

    render(){
            const category = this.props.category;
            return(
                <Container>
                    <Row className="justify-content-md-start">
                        {this.props.articles.slice(1).map( (el, index) =>
                            <Card style={{ width: 265 }} className="card  shadow" key={index}>
                            <a href={el.url} target="_blank" className="card__image_link" rel="noopener noreferrer">
                                <Card.Img variant="top" src={el.urlToImage} className="card__image"/>
                            </a>
                                <div className="card__image_icons">
                                    <Row>
                                        <FaPlus className="card__image_icons--icon card__image_icons--icon-plus"/>
                                    </Row>
                                    <Row>
                                        <FaHeart className="card__image_icons--icon card__image_icons--icon-heart"/>
                                    </Row>
                                    <Row>
                                        <MdLocalPostOffice className="card__image_icons--icon card__image_icons--icon-letter"/>
                                    </Row>
                                </div>
                                    <Card.Body className="card__body">
                                        <Link to={`/${category}`} className="card__body_category  text-uppercase">{category}</Link>
                                        <a href={el.url} className="card__body_title" target="_blank" rel="noopener noreferrer">
                                            <Card.Title>{el.title}</Card.Title>
                                        </a>
                                        <Card.Subtitle className="card__body_author">{el.author}</Card.Subtitle>
                                        <Card.Text className="card__body_text">{el.content}</Card.Text>
                                    </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Container>

            )
        }
}
