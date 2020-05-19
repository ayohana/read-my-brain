import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const formContainerStyle = {
  backgroundColor: 'rgb(250,250,225)',
  margin: '20px'
}

const iconsContainerStyle = {
  paddingLeft: '10px',
  paddingRight: '10px',
}

const copiedMessageStyle = {
  color: 'rgb(85,188,255)',
  marginLeft: '0.5em',
  fontSize: '0.9em',
  textShadow: '0.4px 0.4px #888888',
  animation: 'fadeinout 2s linear forwards',
  opacity: '0'
}

function Form(props) {

  // TO FIX: ATTEMPT TO APPEND TO INPUT TEXT
  // HANDLER WORKS WHEN THE TEXT AREA IS EMPTY
  // DOES NOT APPEND AFTER TEXT INPUT IS EDITED
  // const handleAppendToInputText = (charToAppend) => {
  //   let input = document.getElementById("inputText");
  //   input.innerHTML += charToAppend;
  //   console.log(input.innerHTML);
  // }

  const [copied, setCopied] = useState(false);
  const [randomSentence, setRandomSentence] = useState("");

  const handleLiveTranslation = event => {
    event.preventDefault();
    props.onFormSubmit(event.target.value);
  }

  const generateRandomSentence = () => {
    const arrSentences = ["84F DNR pt from ED is A&Ox2 c̅ Hx HTN, DM, RTKA. Ax pnc will need CXR STAT!", "99M SNF pt is A&Ox1 c̅ Hx AD, PD, ↓ appetite. Needs 1:1 feed assistance.", "32F POD1 RNY sx needs BG checks ACHS and VS Q4H.", "61M c̅ L hip pain s/p fall. Plan for OR in the AM, PM CHG wipes done, sx consent signed. Ortho MD visited."]
    let randomIndex = Math.floor((Math.random() * arrSentences.length));
    setRandomSentence(arrSentences[randomIndex]);
  }

  return (
    <React.Fragment>
      <div style={formContainerStyle}>
        <div style={iconsContainerStyle}>
          <CopyToClipboard text="c̅" onCopy={() => setCopied(true)} onMouseUp={() => setCopied(false)}>
            <span className="icon">c̅</span>
          </CopyToClipboard>
          <CopyToClipboard text="ā" onCopy={() => setCopied(true)} onMouseUp={() => setCopied(false)}>
            <span className="icon">ā</span>
          </CopyToClipboard>
          <CopyToClipboard text="p̄" onCopy={() => setCopied(true)} onMouseUp={() => setCopied(false)}>
            <span className="icon">p̄</span>
          </CopyToClipboard>
          <CopyToClipboard text="↑" onCopy={() => setCopied(true)} onMouseUp={() => setCopied(false)}>
            <span className="icon">↑</span>
          </CopyToClipboard>
          <CopyToClipboard text="↓" onCopy={() => setCopied(true)} onMouseUp={() => setCopied(false)}>
            <span className="icon">↓</span>
          </CopyToClipboard>
          <CopyToClipboard text={randomSentence} onMouseDown={() => generateRandomSentence()} onCopy={() => setCopied(true)} onMouseUp={() => setCopied(false)}>
            <span className="icon">Surprise me!</span>
          </CopyToClipboard>
          {copied ? <span style={copiedMessageStyle}>Copied!</span> : null}
          {/* ATTEMPT TO APPEND TO INPUT TEXT: */}
          {/* <span className="icon" onClick={() => handleAppendToInputText("c̅")}>c̅</span>
          <span className="icon" onClick={() => handleAppendToInputText("ā")}>ā</span>
          <span className="icon" onClick={() => handleAppendToInputText("p̄")}>p̄</span>
          <span className="icon" onClick={() => handleAppendToInputText("↑")}>↑</span>
          <span className="icon" onClick={() => handleAppendToInputText("↓")}>↓</span> */}
        </div>
        <br />
        <textarea onInput={handleLiveTranslation} type="text" id="inputText" rows="10" placeholder="Write something here...">
        </textarea>
      </div>
    </React.Fragment>
  );
}

export default Form;
