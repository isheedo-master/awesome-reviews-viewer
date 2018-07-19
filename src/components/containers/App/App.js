import React, { Component } from 'react';
import baseStyles from '../../../styles/baseStyles';

class App extends Component {
  render() {
    baseStyles();
    return (
      <div>
        <h1>Awesome reviews viewer</h1>
      </div>
    );
  }
}

export default App;
