import React, { useState, useEffect } from 'react';
import Form from './Form';
import Translation from './Translation';
import Modal from './Modal';

function Body() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [translation, setTranslation] = useState(null);
  const [inputToTranslate, setInputToTranslate] = useState("");
  const [privacyAgreement, setPrivacyAgreement] = useState(false);

  // GET TRANSLATION =====================================
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

  if (error) {
    return (
      <p>Please refresh the page. Brain shut down occurred: {error}</p>
    )
  } else if (!isLoaded) {
    return(
      <React.Fragment>
        <div id="loading">
          <h3>Powering up brain...</h3>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div id="bodyContainer">
          <div>
            <Form onFormSubmit={handleTranslation} />
          </div>
          <div>
            {translation ? <Translation translation={translation} /> : null}
          </div>
        </div>
        {privacyAgreement ? null : <Modal onClosingModal={setPrivacyAgreement} />}
      </React.Fragment>
    );
  }
  
}

export default Body;
