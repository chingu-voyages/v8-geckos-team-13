//Georgi

import React, {Component} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {FaRegComments, FaAngleDown, FaHeart, FaPlus } from 'react-icons/fa';
import { MdLocalPostOffice } from "react-icons/md";
import './ArticleGrid.css';



export default class extends Component {

    state = {
        articles : [],
        loaded: false
    }


    componentDidMount(){
        this.props.news('technology')//you can do this in a few ways, what you wanna control is the argument of the function, if its dinamycal u would need a helper function, but be carefull..i haven't had the time to do everytthing, but u should have enough to get you going
            .then(response => { //the componentDidMount is Reacts (built in) lifecycle method, it runs after the render method.So when u change the state, the render method (and all dependencies) gets trigered automatocally..it reacts!!
                this.setState({
                    loaded: true,//i set the load for testing purposes, and left it for ur testing purposes ;)
                    articles: response.articles
                });
            });
    }
    render(){

        const { loaded, articles } = this.state;
        console.log(articles);
        if(!loaded){//this is only for testing purpose, we ll change it latter
            return(
                <Container>
                      <Row className="justify-content-md-center">
                            <div className="loading">LOADING!</div>
                      </Row>
                </Container>
            )
        }else{

            return(
                <Container>
                    <Row className="justify-content-md-start">
                        {articles.map( el =>
                            <Card style={{ width: 265 }} className="card">
                                <Card.Img variant="top" src={el.urlToImage} className="card__image"/>
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
                                            <Card.Title>{el.title}</Card.Title>
                                            <Card.Subtitle className="card__body_author">{el.author}</Card.Subtitle>
                                            <Card.Text>
                                            {el.content}
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
}
