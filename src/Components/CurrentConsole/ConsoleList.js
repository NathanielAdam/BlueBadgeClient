import React from 'react';
import ConsoleSubmition from './ConsoleSubmition'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class ConsoleList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div >
                <h2>Consoles</h2>
                <Container id="consoleContainer">
                <Row>
                <ConsoleSubmition Token={this.props.Token} consoleOne={this.consoleOne=1}/>
                <ConsoleSubmition Token={this.props.Token} consoleTwo={this.consoleTwo=2}/>
                <ConsoleSubmition Token={this.props.Token} consoleThree={this.consoleThree=3}/>
                </Row>
                <Row>
                    <Col>
                        <p className="section-exp">Here put any consoles you have *note that you only have three slots, these are meant to match your with your current games</p>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}