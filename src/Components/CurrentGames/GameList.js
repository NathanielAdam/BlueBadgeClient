import React, { Component } from 'react';
import { Col } from 'reactstrap';
import GameSubmitUpdate from './GameSubmission&Update'

export default class GameList extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            token:localStorage.token,
            imgUrl:""

        }
    

    }
    
    SummonImages() {
        if(this.state.token){
            fetch("http://localhost:3000/api/games", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    
                })
            }).then(
                (response) => response.json()
                
            ).then(
                function (data){
                    console.log(data)
                    const games=data.Game
                    console.log(games)
                    const gameListed = games.map((gameImg) => 
                        
                        <img ref="gameImg"
                        name="gameImg"
                        src={gameImg}
                        alt="Placeholder"
                        className="game-art"
                         />
                )
                
                }
            )
        } else {
            console.log('waiting for games/login')
        }
    }

    render() {
        console.log(this.state)
        console.log(this)
        
        return(
            // <Row>
                <Col className="game-placeHolder">
                        <a className="gameLink " href="#">
                            <div className="Imagehere">
                            {this.SummonImages()}
                            </div>
                        </a>
                        <GameSubmitUpdate/>
                </Col> 
        )
    }
}






