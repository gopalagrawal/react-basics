import React from "react";
import "./App.scss";

import Person from './Person/Person';

// Functional Component in this file.
// For Class Component, see App_CC.js

function App() {
  return (
    <div className="App">
      <Person name='Gopal'    job='Comp Engineer'     avatar='Gopal.png' />
      <Person name='Shweta'   job='German Teacher'    avatar='Shweta.png'/>
    </div>
  );
}

export default App;
