import React, { Component } from 'react';
import './App.css';
import Navigationbar from './Components/Navigationbar'

class App extends Component {
  render() {
    return (
      <div>
        <div className="navigationBar">
          <Navigationbar/>
        </div>
      </div>
    );
  }
}
export default App;