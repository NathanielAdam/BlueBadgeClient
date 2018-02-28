/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
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
    fetch("http://localhost:3000/api/login", {
        method: 'POST',
        body: JSON.stringify({user:this.state}),
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    }).then(
      
        (response) => response.json()
    ).then((data) => {
      console.log(this)
        this.props.setToken(data.sessionToken)
      console.log(data)
      this.setState({
        modal:false
      })
    }) 
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
        <Button onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="Su-Label" toggle={this.toggle}>Login</ModalHeader>
          <form>
            <ModalBody>
              <Container>
                <Row>
                  <Col xs="3" className="padding-0">
                    <label className="Su-Label">Username</label>
                  </Col>
                  <Col className="padding-0">
                    <input onChange={this.handleChange} ref="username" name="username" className="input-align Paint-it-Black" type="text" placeholder="test"/>
                  </Col>
                </Row>
                
                <Row className="">
                  <Col xs="3" className="padding-0">
                    <label className="Su-Label">Password</label>
                  </Col>
                  <Col xs="9" className="padding-0">
                    <input onChange={this.handleChange} ref="password" name="password" className="input-align Paint-it-Black" type ="password" placeholder="P@$$w0rD"/>
                  </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>Login</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;