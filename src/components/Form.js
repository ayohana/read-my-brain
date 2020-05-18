import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const formContainerStyle = {
  backgroundColor: 'rgb(250,250,225)',
  margin: '10px'
}

const iconsContainerStyle = {
  paddingLeft: '10px',
  paddingRight: '10px',
}

function Form(props) {

  const handleLiveTranslation = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.value);
  }

  return (
    <React.Fragment>
      <div style={formContainerStyle}>
        <div style={iconsContainerStyle}>
          <CopyToClipboard text="c̅">
            <span className="icon">c̅</span>
          </CopyToClipboard>
          <CopyToClipboard text="ā">
            <span className="icon">ā</span>
          </CopyToClipboard>
          <CopyToClipboard text="p̄">
            <span className="icon">p̄</span>
          </CopyToClipboard>
          <CopyToClipboard text="↑">
            <span className="icon">↑</span>
          </CopyToClipboard>
          <CopyToClipboard text="↓">
            <span className="icon">↓</span>
          </CopyToClipboard>
        </div>
        <br />
        <input onInput={handleLiveTranslation} type="text" name="inputText" placeholder="Write something here..." />
      </div>
    </React.Fragment>
  );
}

export default Form;
