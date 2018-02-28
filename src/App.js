import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import logo from './profileAssets/defaultProfile.png';
import CurrentGame from './Components/CurrentGames/CurrentGames'
import ConsoleList from './Components/CurrentConsole/ConsoleList'
import Navigation from './Components/Nav/Nav'
import ErrorBoundary from './Components/User/error'
import Footer from './Components/Footer/Footer'
import Auth from './Components/User/Auth'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: ''
    }
    
    this.setSessionState = this.setSessionState.bind(this);
    
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  logout(){
    this.setState({ sessionToken: '' });
    localStorage.removeItem('token');
  }
  status(event){
    console.log(this)
  }
 

  render() {
    if(localStorage.token){
      return (
        <div className="App">
          
          <header className="App-header">
          <Navigation setToken={this.setSessionState} logout={this.logout}/>
            <img src={logo} className="user-pic" alt="logo" />  
            <h1 className="App-title">Game Time Organization</h1>
          </header>                      
            
            <CurrentGame Token={this.state.sessionToken}/>
            <ConsoleList Token={this.state.sessionToken}/>
        </div>

      );
    }else{
      return (
        <div className="App">
          <div className="body">
          <header className="App-header">
            <img src={logo} className="user-pic" alt="logo" />
            <h1 id="makeMeBig" className="App-title">Please log in or sign up before proceeding</h1>
            
          </header>
            <div className="Collapsable-Nav">
            
            </div>
            <div className="Current-Games">
              
              <Auth setToken={this.setSessionState}/>
            </div>
            <div className="Owned-Consoles">
              
            </div>
            <footer className="App-Footer">
            <Footer/>
            </footer>
          </div>
        </div>

    );}
  }
}

export default App;
