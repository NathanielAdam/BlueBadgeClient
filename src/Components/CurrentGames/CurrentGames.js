import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GameList from './GameList'
import GameSubmitUpdate from './GameSubmission&Update'
const CurrentGame= (props) => {
        return(
            
            
                <Container className="List-of-Three">
                    <Row>
                        <GameList setToken={this.setSessionState} gameOne={props.gameOne}/>
                        <GameList setToken={this.setSessionState} gameOne={props.gameOne}/>
                        <GameList setToken={this.setSessionState} gameOne={props.gameOne}/>

                        
                    </Row>
                </Container>
            
                
            
        )
}
export default CurrentGame