//Georgi

import React, {Component} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {FaRegComments, FaAngleDown} from 'react-icons/fa';
import './ArticleGrid.css';


export default class extends Component {
    render(){
        return(
            <Card style={{ width: '270px' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/270x248"/>
                    
               <Container className="card__body">
                     <Card.Body className="card__body">
                        <Card.Title>Card Title</Card.Title>
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
        )  
    }
}