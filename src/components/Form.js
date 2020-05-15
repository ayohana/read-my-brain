import React from 'react';

function Form(props) {

  const handleLiveTranslation = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.value);
  }

  return (
    <React.Fragment>
      <h1>This is a Form</h1>
      <input onInput={handleLiveTranslation} type="text" name="inputText" placeholder="84F pt needs BG ACHS" />
    </React.Fragment>
  );
}

export default Form;
