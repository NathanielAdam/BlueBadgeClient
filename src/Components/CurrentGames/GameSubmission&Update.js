/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class GameSubmitUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        genre:"",
        gameImg:"",
        modal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        fetch("http://localhost:3000/api/games", {
            method: 'POST',
            body: JSON.stringify({game:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json(),
            this.setState({
                modal:false
            })
        )
        event.preventDefault()
}

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render()
   {

    
    return (
      
      <div>
        <Button onClick={this.toggle}><img alt="dammit" src="https://png.icons8.com/metro/1600/upload.png"/></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="Su-Label" toggle={this.toggle}>Upload Game and Imagae</ModalHeader>
            <form>
                <ModalBody>
                    <Container>
                        <Row>
                        <Col xs="4" className="padding-0">
                            <label className="Su-Label">Game Title</label>
                        </Col>
                        <Col className="padding-0">
                            <input onChange={this.handleChange} ref="title" name="title" className="input-align Paint-it-Black" type="text" placeholder="test"/>
                        </Col>
                        </Row>
                        
                        <Row className="">
                        <Col xs="4" className="padding-0">
                            <label className="Su-Label">Genre</label>
                        </Col>
                        <Col className="padding-0">
                            <input onChange={this.handleChange} ref="genre" name="genre" className="input-align Paint-it-Black" type ="text" placeholder="Action"/>
                        </Col>
                        </Row>
                        <Row className="">
                        <Col xs="4" className="padding-0">
                            <label className="Su-Label">Box-Art URL</label>
                        </Col>
                        <Col className="padding-0">
                            <input onChange={this.handleChange} ref="gameImg" name="gameImg" className="input-align Paint-it-Black" type ="text" placeholder="Image URL"/>
                        </Col>
                        </Row>
                    </Container>
                </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>Upload</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default GameSubmitUpdate;