import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Form(props) {

  const handleLiveTranslation = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.value);
  }

  return (
    <React.Fragment>
      <h1>This is a Form</h1>
      <CopyToClipboard text="c̅">
        <span className="icon">c̅</span>
      </CopyToClipboard>
      <CopyToClipboard text="ā">
        <span className="icon">ā</span>
      </CopyToClipboard>
      <CopyToClipboard text="p̄">
        <span className="icon">p̄</span>
      </CopyToClipboard>
      <input onInput={handleLiveTranslation} type="text" name="inputText" placeholder="Write something here..." />
    </React.Fragment>
  );
}

export default Form;
