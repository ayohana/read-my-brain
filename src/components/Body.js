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

  let inputToTranslate = "84F Hx";

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: inputToTranslate
    }
    fetch("https://readmybrain.azurewebsites.net/api/translate", requestOptions)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        setIsLoaded(true);
        setTranslation(jsonifiedResponse);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  })

  // let currentlyVisibleMessage = "";
  // const setVisibility = (function() {
  //   if (error) {
  //     currentlyVisibleMessage = `Error: ${error}`;
  //   } else if (!isLoaded) {
  //     currentlyVisibleMessage = `Loading...`;
  //   } else {
  //     currentlyVisibleMessage = "";
  //   }
  // })();

  return (
    <React.Fragment>
      <h1>This is a Body</h1>
      <div>

        <p>Translation: {translation}</p>
      </div>
      <div style={columnsStyle}>
        <Form />
        <Translation />
      </div>
    </React.Fragment>
  );
}

export default Body;
