import React from 'react';
import { Container } from 'reactstrap';

import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    
    return (
        
        <Container className="auth-container">
            <Signup setToken={props.setToken}/>
            <Login setToken={props.setToken}/>
        </Container>
    )
}

export default Auth;