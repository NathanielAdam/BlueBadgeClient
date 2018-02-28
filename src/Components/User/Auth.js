import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    console.log(props)
    return (
        
        <Container className="auth-container">
            <Row>
                <Col>    
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col>
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;