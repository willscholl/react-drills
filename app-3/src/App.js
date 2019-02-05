import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super ()
    this.state = {
      foods: ["Bread", "Cereal", "Rice", "Pasta", "Vegetables", "Carrots"],
      filteredFood: '',
      
    }
  }

  handleChange(value) {
    this.setState({
      filteredFood: value
    }) 
  }

  render() {
    const filtered = this.state.foods.filter( (element) => {
      return element.includes( this.state.filteredFood );
    }).map( (elem, index) => {
      return <h2 key={ index }>{ elem }</h2>
    })

    return (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <input onChange={(e)=> this.handleChange(e.target.value)} value={this.state.filter}></input>
        <h2>{filtered}</h2>
      </div>
    );
  }
}

export default App;
