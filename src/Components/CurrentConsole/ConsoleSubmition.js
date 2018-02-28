import React from 'react';
import { Col, Button, Modal, ModalBody, ModalHeader, ModalFooter, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class ConsoleSubmition extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            consoleImg: "https://i.imgur.com/zvFSmIs.jpg",
            consoleName:"",
            consoleId:"",
            
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.FetchConsoleImages = this.FetchConsoleImages.bind(this)
        this.HandleConsoleDelete = this.HandleConsoleDelete.bind(this)
        this.handleConsoleSubmit = this.handleConsoleSubmit.bind(this)
    }
    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentWillMount(){
        this.FetchConsoleImages()
    }

    FetchConsoleImages(){fetch("http://localhost:3000/api/consoles", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.Token
                })
        })
        .then((res) => res.json())
        .then(data => {
            
            if(this.props.consoleOne && localStorage.token){
                let imgId = data[0].id
                let imgUrl = data[0].consoleImg
                let consoleName = data[0].consoleName
               this.setState({consoleImg:imgUrl, consoleId:imgId, consoleName:consoleName})
               
            
                
                
                


            } else if(this.props.consoleTwo && localStorage.token) {
                let imgId = data[1].id
                let imgUrl = data[1].consoleImg
                let consoleName = data[1].consoleName
                
               this.setState({consoleImg:imgUrl, consoleId:imgId, consoleName:consoleName})
                


            } else if(this.props.consoleThree && localStorage.token){
                let imgId = data[2].id
                let imgUrl = data[2].consoleImg
                let consoleName = data[2].consoleName
               
                
                 this.setState({consoleImg:imgUrl, consoleId:imgId, consoleName:consoleName})
               
                 
                


            } else {
                alert("how did you get this error? Please contact me through email!")
            }
            
        }).catch(Error)
    }
    updateConsoleImages(){
        this.FetchConsoleImages()
    }
    HandleConsoleDelete(event){
        console.log(event.target.id)
        fetch("http://localhost:3000/api/consoles", {
            method: 'DELETE',
            body: JSON.stringify({id:event.target.id}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.Token
            
            })
        })
        .then(
            (res) => {this.setState({consoleImg:"https://i.imgur.com/zvFSmIs.jpg"})},
            ()=>{console.log('Failed to delete')}
        )
    }
    handleChange(event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value,
        });
        
    }

    handleConsoleSubmit(event) {
        event.preventDefault()
        console.log(this)
        var postData = {
            
            consoleName:this.state.consoleName,
            consoleImg:this.state.consoleImg
            
        }
        
        fetch("http://localhost:3000/api/consoles", {
            method: 'POST',
            body: JSON.stringify({GameSystem:postData}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.Token
            })
        })
        
        .then(
            (res) => {res.json() , this.updateImages()}
    )
        .then(
            this.setState({modal:false}),
            ()=>{console.log('failure to change modal state')}
        )
        
    }
    render(){    
        //  console.log('This',this)
        // console.log('state',this.state)
        // console.log('props',this.props)
        //  console.log('fetchImages', this.FetchImages )
        return(
            <Col className="form-group console-placeHolder">      
                <div  className="form-group image-wrapper">
                    <Button className="delete-button" onClick={this.HandleConsoleDelete} id={this.state.consoleId} ><img  src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/erase_delete_remove_wipe_out-512.png"/></Button>
                    <img id="consoleArt" alt="Whatever" src={this.state.consoleImg}/>
                    <Button id="modal-console-button" onClick={this.toggle}><img alt="dammit" src="https://png.icons8.com/metro/1600/upload.png"/></Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                    <ModalHeader className="Su-Label" toggle={this.toggle}>Upload console and Image</ModalHeader>
                    <form>
                        <ModalBody>
                            <Container>
                                <Row>
                                    <Col xs="4" className="padding-0">
                                        <label className="Su-Label">console Title</label>
                                    </Col>
                                    <Col className="padding-0">
                                        <input  ref="consoleName" name="consoleName" className="input-align Paint-it-Black" type="text" placeholder="test" onChange={this.handleChange}/>
                                    </Col>
                                </Row>
                                
                                <Row className="">
                                    <Col xs="4" className="padding-0">
                                        <label className="Su-Label">Console Image</label>
                                    </Col>
                                    <Col className="padding-0">
                                        <input onChange={this.handleChange} ref="consoleImg" name="consoleImg" className="input-align Paint-it-Black" type ="text" placeholder="Image URL"/>
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleConsoleSubmit}>Upload</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </Col>
        )
    }
}