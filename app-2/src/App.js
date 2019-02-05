import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super ()

    this.state = {
      groceryList: ["Bread", "Cereal", "Rice", "Pasta", "Bread", "Vegetables", "Carrots"]
    }
  }

  render() {
    const mapList = this.state.groceryList.map(item => {
      return <h2>{item}</h2>
    })
    return (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        {mapList}
      </div>
    );
  }
}

export default App;
