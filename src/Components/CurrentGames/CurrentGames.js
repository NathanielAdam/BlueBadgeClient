import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GameList from './GameList'


export default class CurrentGame extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        // console.log(this.props)
        return(
            
            
            <div>
                <h2>Games</h2>
                <Container id="dontTestMeCss">
                    <Row>
                        <GameList Token={this.props.Token} gameOne={this.gameOne=1}/>
                        <GameList Token={this.props.Token} gameTwo={this.gameTwo=2}/>
                        <GameList Token={this.props.Token} gameThree={this.gameThree=3}/>
                    </Row>
                    <Row>
                        <Col>
                            <p className="section-exp">Here Put three Games that you are wanting to play when you have time</p>
                        </Col>
                    </Row>
                </Container>
            </div>
                
            
     
        )
    }
}