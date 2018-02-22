import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class CurrentPlatform extends Component{
    // constructor(props){
    //     super(props);
    //     console.log(props);
    //     this.state = {

    //     }

    // }
    render(){
        return(
            <div>
                

                <Container className="SystemList">
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <h2>Consoles</h2>
                        </Col>
                        <Col></Col>    
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col>
                            <img 
                            src="http://www.iconarchive.com/download/i77881/prepaidgamecards/gaming-gadgets/PlayStation-4.ico" 
                            alt="Test"/>
                            <h4>Place holder Text</h4>
                        </Col>
                        <Col>
                            <img src="http://www.iconarchive.com/download/i77881/prepaidgamecards/gaming-gadgets/PlayStation-4.ico" 
                            alt="Test"/>
                            <h4>Place holder Text</h4>
                        </Col>
                        <Col>
                            <img src="http://www.iconarchive.com/download/i77881/prepaidgamecards/gaming-gadgets/PlayStation-4.ico" 
                            alt="Test"/>
                            <h4>Place holder Text</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}