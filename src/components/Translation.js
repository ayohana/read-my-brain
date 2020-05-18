import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const translationContainerStyle = {
  marginTop: '50px',
  marginRight: '10px',
  padding: '5px'
}

const copiedMessageStyle = {
  color: 'rgb(85,188,255)',
  fontSize: '0.9em',
  textShadow: '0.4px 0.4px #888888',
  animation: 'fadeinout 2s linear forwards',
  opacity: '0'
}

function Translation(props) {

  const [copiedTranslation, setCopiedTranslation] = useState(false);

  return (
    <React.Fragment>
      <div style={translationContainerStyle}>
        <CopyToClipboard text={props.translation} onCopy={() => setCopiedTranslation(true)} onMouseUp={() => setCopiedTranslation(false)}>
          <p id="translation">{props.translation}</p>
        </CopyToClipboard>
        {copiedTranslation ? <span style={copiedMessageStyle}>Copied translation!</span> : null}
      </div>
    </React.Fragment>
  );
}

Translation.propTypes = {
  translation: PropTypes.string
}

export default Translation;
