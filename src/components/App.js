import React from 'react';
import Header from './Header';
import Body from './Body';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div id="appContainer">
        <Header />
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
