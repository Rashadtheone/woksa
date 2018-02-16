import React, { Component } from 'react';
import './App.css';
import { Home, Navi, Universe, Characters,
         Books} from './components'
import { Route,Link, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navi />
      <div className="container">
      <Route exact path="/woksa/home" render={() => (<Home />)} />
      <Route exact path="/woksa/universe" render={() => (<Universe />)} />
      <Route exact path="/woksa/characters" render={() => (<Characters />)} />
      <Route exact path="/woksa/books" render={() => (<Books />)} />
      <Route exact path="/woksa/books" render={() => (<About />)} />
      <Route path="/*" render={() => (<Redirect to="/woksa/home" />)} />
      </div>

      </div>
    );
  }
}

export default App;
