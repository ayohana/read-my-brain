import React, { useState, useEffect } from 'react';
import Form from './Form';
import Translation from './Translation';

const columnsStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '10px',
  // borderColor: 'blue',
  // borderStyle: 'solid'
}

function Body() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [translation, setTranslation] = useState("");
  const [inputToTranslate, setInputToTranslate] = useState("");


  // GET TRANSLATION
  const handleTranslation = (inputToTranslate) => {
    setInputToTranslate(inputToTranslate);
  }

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(inputToTranslate)
    }
    fetch("https://readmybrain.azurewebsites.net/api/translate", requestOptions)
      .then(response => response.json()
        .then(result => {
          setIsLoaded(true);
          setTranslation(result);
        }),
      // Note from React Docs: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  })

  let currentlyVisibleMessage = "";
  if (error) {
    currentlyVisibleMessage = <p>Error occurred: {error}</p>;
  } else if (!isLoaded) {
    currentlyVisibleMessage = <p>Loading...</p>;
  } else {
    currentlyVisibleMessage = <p></p>;
  }

  return (
    <React.Fragment>
      {/* <h1>This is a Body</h1> */}
      <div>
        {currentlyVisibleMessage}
      </div>
      <div style={columnsStyle}>
        <div>
          <Form onFormSubmit={handleTranslation} />
        </div>
        <div>
          <Translation translation={translation} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;
