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
        <input onInput={handleLiveTranslation} type="text" name="inputText"placeholder="Write something here...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Translation starts here: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      </div>
    </React.Fragment>
  );
}

export default Form;
