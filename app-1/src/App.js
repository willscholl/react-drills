import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super ()
    this.state = {
      useroutPut: ''
    }
  }

  handleChange(value) {
    this.setState({
      useroutPut: value
    }) 
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e)=> this.handleChange(e.target.value)} value={this.state.useroutPut}></input>
        <h4>{this.state.useroutPut}</h4>
      </div>
    );
  }
}

export default App;
