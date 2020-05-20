import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import About from './About';
import './App.css';

function App() {

  const [bodyVisible, setBodyVisible] = useState(true);
  
  const handleDisplayDefaultView = (boolean) => {
    setBodyVisible(boolean);
  }

  return (
    <React.Fragment>
      <div id="appContainer">
        <Header onClickingHeaderContent={handleDisplayDefaultView} />
        {bodyVisible ? <Body /> : <About onClickingGetStarted={handleDisplayDefaultView}/>}
      </div>
    </React.Fragment>
  );
}

export default App;
