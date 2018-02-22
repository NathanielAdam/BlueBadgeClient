import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {


    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h5 className="Su-Label">Contact Me</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}