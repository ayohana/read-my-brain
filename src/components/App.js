import React from 'react';
import Header from './Header';
import Body from './Body';
import './App.css';

const appStyle = {
  animation: 'fadein 2s linear forwards',
  opacity: '0'
}

function App() {
  return (
    <React.Fragment>
      <div style={appStyle}>
        <Header />
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
