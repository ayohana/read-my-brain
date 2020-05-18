import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const formStyle = {
  backgroundColor: 'rgb(250,250,225)',
}

function Form(props) {

  const handleLiveTranslation = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.value);
  }

  return (
    <React.Fragment>
      <div style={formStyle}>
        <CopyToClipboard text="c̅">
          <span className="icon">c̅</span>
        </CopyToClipboard>
        <CopyToClipboard text="ā">
          <span className="icon">ā</span>
        </CopyToClipboard>
        <CopyToClipboard text="p̄">
          <span className="icon">p̄</span>
        </CopyToClipboard>
        <br />
        <input onInput={handleLiveTranslation} type="text" name="inputText" placeholder="Write something here..." />
      </div>
    </React.Fragment>
  );
}

export default Form;
