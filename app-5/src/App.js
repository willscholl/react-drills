import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myPic={"https://apod.nasa.gov/apod/image/1902/N70_Durdis_2000.jpg"}/>
      </div>
    );
  }
}

export default App;
