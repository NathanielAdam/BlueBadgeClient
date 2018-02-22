import React, { Component } from 'react';
import logo from './profileAssets/defaultProfile.png';
import './App.css';
import CurrentGame from './Components/CurrentGames/CurrentGames'
import CurrentPlatform from './Components/CurrentPlatforms/CurrentPlatforms'
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
          <div className="body">
          <header className="App-header">
            <img src={logo} className="user-pic" alt="logo" />
            <h1 className="App-title">Game Time Organization</h1>
          </header>
            <div className="Collapsable-Nav">
            <Navigation setToken={this.setSessionState}/>
            </div>
            <div className="Current-Games">
            <CurrentGame setToken={this.setSessionState}/>

            </div>
            <div className="Owned-Consoles">
            <CurrentPlatform setToken={this.setSessionState}/>
            </div>
            <footer className="App-Footer">
            <Footer setToken={this.setSessionState}/>
            </footer>
          </div>
        </div>

      );
    }else{
      return (
        <div className="App">
          <div className="body">
          <header className="App-header">
            <img src={logo} className="user-pic" alt="logo" />
            <h1 className="App-title">Game Time Organization</h1>
            <ErrorBoundary><Auth setToken={this.setSessionState}/></ErrorBoundary>
          </header>
            <div className="Collapsable-Nav">
            <Navigation setToken={this.setSessionState}/>
            </div>
            <div className="Current-Games">
            <CurrentGame setToken={this.setSessionState}/>

            </div>
            <div className="Owned-Consoles">
            <CurrentPlatform setToken={this.setSessionState}/>
            </div>
            <footer className="App-Footer">
            <Footer setToken={this.setSessionState}/>
            </footer>
          </div>
        </div>

    );}
  }
}

export default App;
