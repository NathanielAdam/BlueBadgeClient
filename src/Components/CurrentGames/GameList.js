import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Button, Modal, ModalBody, ModalHeader, ModalFooter, Container, Row } from 'reactstrap';





    export default class GameList extends Component {
        constructor(props){
            super(props);
            
            this.state = {
                token:"",
                title:"",
                genre:"",
                gameImg:"https://i.imgur.com/zvFSmIs.jpg",
                gameId:"",
                updateModal:false

            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.FetchImages = this.FetchImages.bind(this);
            this.updateImages = this.updateImages.bind(this)
            this.HandleDelete = this.HandleDelete.bind(this)
            this.toggle = this.toggle.bind(this);
            this.handleUpdate = this.handleUpdate.bind(this)
            
            
        }
        
        componentWillMount(){
            this.FetchImages()
        }

        FetchImages(){fetch("https://bluebadgeserver.herokuapp.com/api/games", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.Token
                    })
            })
            .then((res) => res.json())
            .then(data => {
                // console.log(data)
                if(this.props.gameOne && localStorage.token){
                    let imgId = data.Game[0].id
                    let gameImg = data.Game[0].gameImg
                    let title = data.Game[0].title
                    let genre = data.Game[0].genre
                    
                    this.setState({gameId:imgId, gameImg:gameImg, title:title, genre:genre})

                } else if(this.props.gameTwo && localStorage.token) {
                    let imgId = data.Game[1].id
                    let gameImg = data.Game[1].gameImg
                    let title = data.Game[1].title
                    let genre = data.Game[1].genre
                    
                    this.setState({gameId:imgId, gameImg:gameImg, title:title, genre:genre})
                    
                } else if(this.props.gameThree && localStorage.token){
                    let imgId = data.Game[2].id
                    let gameImg = data.Game[2].gameImg
                    let title = data.Game[2].title
                    let genre = data.Game[2].genre
                    
                    this.setState({gameId:imgId, gameImg:gameImg, title:title, genre:genre})

                } else {
                    // console.log("how did you get this error? Please contact me through email!")
                }
                
            }).catch(Error)
        }
        updateImages(){
            this.FetchImages()
        }
        HandleDelete(event){
            
            fetch("https://bluebadgeserver.herokuapp.com/api/games", {
                method: 'DELETE',
                body: JSON.stringify({game:{id:event.target.id}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    
                
                })
            })
            .then(
                (res) => {this.setState({gameImg:"https://i.imgur.com/zvFSmIs.jpg"})},
                ()=>{console.log('Failed to delete')}
            )
        }
        handleChange(event) {
            // console.log(event.target.name)
            this.setState({
                [event.target.name]: event.target.value,
            });
            // console.log(this.state.title)
        }

        handleSubmit(event) {
            event.preventDefault()
            // console.log(this)
            var postData = {
                game:{
                title:this.state.title,
                genre:this.state.genre,
                gameImg:this.state.gameImg
                }
            }
            
            fetch("https://bluebadgeserver.herokuapp.com/api/games", {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.Token
                })
            })
            
            .then(
                (res) => {this.updateImages()}
        )
            .then(
                this.setState({modal:false}),
                // ()=>{console.log('failure to change modal state')}
            )
            
        }
        handleUpdate(event){
            var postData = {
                game:{
                gameId:this.state.gameId,
                title:this.state.title,
                genre:this.state.genre,
                gameImg:this.state.gameImg
                }
            }
            fetch("https://bluebadgeserver.herokuapp.com/api/games", {
                method:'PUT',
                body: JSON.stringify(postData),
                headers: new Headers({
                    'Content-Type': 'application/json'
                
                })
            }).then(
                (res) => {this.updateImages()}
            ).then(this.setState({updateModal:false}))   
        }
        toggle() {
            
            // console.log(updateOrUpload)
            if (this.state.gameImg === "https://i.imgur.com/zvFSmIs.jpg" && this.state.gameId===""){
                // console.log(this.state)
                this.setState({
                    modal: !this.state.modal
                })
                
            } else {
                this.setState({
                    updateModal: !this.state.updateModal
                })
            }
            
        }


    render() {
        //  console.log('This',this)
        //   console.log('state',this.state)
        //   console.log('props',this.props)
        //  console.log('fetchImages', this.FetchImages )
    
        return(
            <Col className="form-group game-placeHolder">      
                <div className=" img-wrapper">    
                    <Button className="delete-item" onClick={this.HandleDelete} id={this.state.gameId} ><img  src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/erase_delete_remove_wipe_out-512.png"/></Button>
                    <img alt="BoxArtPlaceHolder" id="boxArt" alt={this.props.gameOne} src={this.state.gameImg}/>
                    <Button id="modal-button" className="upload-item" onClick={this.toggle}><img alt="dammit" src="https://png.icons8.com/metro/1600/upload.png"/></Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="Su-Label" toggle={this.toggle}>Upload Game and Imagae</ModalHeader>
                    <form>
                        <ModalBody>
                            <Container id="style-remove">
                                <Row>
                                    <Col xs="4" className="padding-0">
                                        <label className="Su-Label">Game Title</label>
                                    </Col>
                                    <Col className="padding-0">
                                        <input  ref="title" name="title" className="input-align Paint-it-Black" type="text" placeholder="test" onChange={this.handleChange}/>
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
                    
                <Modal isOpen={this.state.updateModal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="Su-Label" toggle={this.toggle}>Update Your Game!</ModalHeader>
                    <form>
                        <ModalBody>
                            <Container>
                                <Row>
                                    <Col xs="4" className="padding-0">
                                        <label className="Su-Label">Game Title</label>
                                    </Col>
                                    <Col className="padding-0">
                                        <input value={this.state.title} ref="title" name="title" className="input-align Paint-it-Black" type="text" onChange={this.handleChange}/>
                                    </Col>
                                </Row>
                                
                                <Row className="">
                                    <Col xs="4" className="padding-0">
                                        <label className="Su-Label">Genre</label>
                                    </Col>
                                    <Col className="padding-0">
                                        <input value={this.state.genre} onChange={this.handleChange} ref="genre" name="genre" className="input-align Paint-it-Black" type ="text" />
                                    </Col>
                                </Row>
                                <Row className="">
                                    <Col xs="4" className="padding-0">
                                        <label className="Su-Label">Box-Art URL</label>
                                    </Col>
                                    <Col className="padding-0">
                                        <input onChange={this.handleChange} ref="gameImg" name="gameImg" className="input-align Paint-it-Black" type ="text" />
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleUpdate}>Update</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </Col> 
        )
        
    }
}