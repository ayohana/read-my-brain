import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const formContainerStyle = {
  backgroundColor: 'rgb(250,250,225)',
  margin: '20px'
}

const iconsContainerStyle = {
  paddingLeft: '10px',
  paddingRight: '10px',
}

function Form(props) {

  const handleAppendToInputText = (charToAppend) => {
    let input = document.getElementById("inputText");
    input.innerHTML += charToAppend;
    console.log(input.innerHTML);
  }

  const handleLiveTranslation = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.value);
  }

  return (
    <React.Fragment>
      <div style={formContainerStyle}>
        <div style={iconsContainerStyle}>
          {/* <CopyToClipboard text="c̅">
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
          </CopyToClipboard> */}
          <span className="icon" onClick={() => handleAppendToInputText("c̅")}>c̅</span>
          <span className="icon" onClick={() => handleAppendToInputText("ā")}>ā</span>
          <span className="icon" onClick={() => handleAppendToInputText("p̄")}>p̄</span>
          <span className="icon" onClick={() => handleAppendToInputText("↑")}>↑</span>
          <span className="icon" onClick={() => handleAppendToInputText("↓")}>↓</span>
        </div>
        <br />
        <textarea onInput={handleLiveTranslation} type="text" id="inputText" rows="25" placeholder="Write something here...">
        </textarea>
      </div>
    </React.Fragment>
  );
}

export default Form;
