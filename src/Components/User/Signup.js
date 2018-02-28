/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      username: '',
      password:'',
      isEmpty: true
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.validateSignUp = this.validateSignUp.bind(this)
   
    
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    
  }
  handleChange(event) {
    console.log("handleChange", event.target.value)
    this.setState({
        [event.target.name]: event.target.value
        
    });
    
    event.preventDefault()
}
handleSubmit(event) {
  fetch("http://localhost:3000/api/user", {
      method: 'POST',
      body: JSON.stringify({user:this.state}),
      headers: new Headers({
          "Content-Type": "application/json"
        })

  }).then(response => response.json(),
    alert('rejected signup info')
  ).then((data) => {
  
  this.props.setToken(data.sessionToken)
  this.setState({
    modal:false
  })
  }) 
  event.preventDefault()
}
  // validateSignUp(event){
    
  //   event.preventDefault()
    
  // }

  render() {
    
    return (
      <div>
        <Button id="signup-button" onClick={this.toggle}>Sign up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle} className="Su-Label">
                  Sign up
            </ModalHeader>
            <ModalBody>
              <Container>
                
                <Row className="">
                
                  <Col xs="3">
                    <label className="Su-Label email-label">Email</label>
                  </Col>
                  <Col className="padding-0">
                    <input require ref="email" name="email" className="input-align Su-Email Paint-it-Black" onChange={this.handleChange} type="email" placeholder="test@test.com"/>
                  </Col>
                </Row>

                <Row className="">
                  <Col xs="3" className="padding-0">
                    <label className="Su-Label">Username</label>
                  </Col>
                  <Col className="padding-0">
                    <input require ref="username" name="username" className="input-align Su-Username Paint-it-Black" onChange={this.handleChange} type="text" placeholder="test"/>
                  </Col>
                </Row>
                
                <Row className="">
                <Col xs="3" className="padding-0">
                  <label className="Su-Label">Password</label>
                </Col>
                <Col xs="9" className="padding-0">
                  <input require ref="password" name="password" className="input-align Su-Password Paint-it-Black" type ="password" onChange={this.handleChange} placeholder="P@$$w0rD"/>
                </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button color="primary"  type="submit">Sign Up</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
         </Modal>
      </div>
    );
  }
}

export default SignupModal;


