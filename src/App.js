import React, { Component } from 'react';
import logo from './profileAssets/defaultProfile.png';
import './App.css';
import CurrentGame from './Components/CurrentGames/CurrentGames'
import CurrentPlatform from './Components/CurrentPlatforms/CurrentPlatforms'
import Navigation from './Components/Nav/Nav'
import LoginModal from './Components/Nav/User/Login'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
        <header className="App-header">
          <img src={logo} className="user-pic" alt="logo" />
          <h1 className="App-title">Game Time Organization</h1>
          <LoginModal/>
        </header>
          <div className="Collapsable-Nav">
          <Navigation/>
          </div>
          <div className="Current-Games">
          <CurrentGame/>
          </div>
          <div className="Owned-Consoles">
          <CurrentPlatform/>
          </div>
          <footer className="App-Footer">
          
          </footer>
        </div>
      </div>

    );
  }
}

export default App;
