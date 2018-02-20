import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
export default class CurrentGame extends Component {
    // constructor(props){
    //     super(props);
    //     console.log(props);
    //     this.state = {

    //     }

    // }

    render() {
        return(
            
            <div className="CurrentGames">
                <Container className="List-of-Three">

                    <Row>
                    <Col></Col>
                        <Col></Col>
                        <Col>
                            <h2>Games</h2>
                        </Col>
                        <Col></Col>
                        
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            
                            <img className="GameBoxArt" src="https://static.giantbomb.com/uploads/original/5/51892/2600115-7026792616-Dark_.jpg" alt="placeholdingnonsense"/>
                            
                        </Col>
                        <Col>
                            
                            <img className="GameBoxArt" src="https://static.giantbomb.com/uploads/original/5/51892/2600115-7026792616-Dark_.jpg" alt="placeholdingnonsense"/>
                            
                        </Col>
                        <Col>
                            
                            <img className="GameBoxArt" src="https://static.giantbomb.com/uploads/original/5/51892/2600115-7026792616-Dark_.jpg" alt="placeholdingnonsense"/>
                            
                        </Col>
                    </Row>
                </Container>    
            </div>
                
            
        )
    }
}