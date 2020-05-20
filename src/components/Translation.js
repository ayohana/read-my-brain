import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Translation(props) {

  const [copiedTranslation, setCopiedTranslation] = useState(false);

  return (
    <React.Fragment>
      <div id="translationContainer">
        <CopyToClipboard text={props.translation} onCopy={() => setCopiedTranslation(true)} onMouseUp={() => setCopiedTranslation(false)}>
          <p id="translationBox">
            <span id="translationHeader">TRANSLATION</span>
            <br />
            <br />
            <span id="translation">{props.translation}</span>
          </p>
        </CopyToClipboard>
        {copiedTranslation ? <span className="copiedMessage">Copied translation!</span> : " "}
      </div>
    </React.Fragment>
  );
}

Translation.propTypes = {
  translation: PropTypes.string
}

export default Translation;
