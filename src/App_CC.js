// Example of a class component

import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HELLO WORLD .. from React Class Component</h1>
				<button className="btn"> CLICK ME </button>
				<p>This is working</p>
      </div>
    );
  }
}

export default App;
