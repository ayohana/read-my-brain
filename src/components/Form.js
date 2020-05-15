import React from 'react';

function Form(props) {

  const handleInputSubmission = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.inputText.value);
  }


  return (
    <React.Fragment>
      <h1>This is a Form</h1>
      <form onSubmit={handleInputSubmission}>
        <input type="text" name="inputText" placeholder="84F pt needs BG ACHS" />
      </form>
    </React.Fragment>
  );
}

export default Form;
