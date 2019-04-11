//Georgi

import React, {Component} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {FaRegComments, FaAngleDown, FaHeart, FaPlus } from 'react-icons/fa';
import { MdLocalPostOffice } from "react-icons/md";
import './ArticleGrid.css';

const example = [0, 1, 2, 3];

export default class extends Component {

    

    render(){
        return(
            <Container>
                <Row className="justify-content-md-start">
                    {example.map( el => 
                        <Card style={{ width: 265 }} className="card">
                            <Card.Img variant="top" src="https://via.placeholder.com/270x248" className="card__image"/>
                            <Container className="card__image_icons">
                                <Row>
                                    <FaPlus className="card__image_icons--icon card__image_icons--icon-plus"/>
                                </Row>
                                <Row>
                                    <FaHeart className="card__image_icons--icon card__image_icons--icon-heart"/>
                                </Row>
                                <Row>
                                    <MdLocalPostOffice className="card__image_icons--icon card__image_icons--icon-letter"/>
                                </Row>
                            </Container>
                    
                            <Container className="card__body">
                                    <Card.Body className="card__body">
                                        <Card.Text href="#" className="card__body_category">CATEGORY</Card.Text>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="card__body_author">Kocila Makdeche</Card.Subtitle>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        
                                            <Row className="card__body__footer">
                                                <FaRegComments className="card__body__footer--comment-icon"/>
                                                <p><span className="card__body__footer__comments--num">6</span> comments <span className="card__body__footer__likes--num">40</span> likes <FaAngleDown className="card__body__footer--like-arrow"/></p>
                                            </Row>
                                    </Card.Body>
                            </Container>
                    
                        </Card>
                    )}
                </Row>
            </Container>
            
        )  
    }
}