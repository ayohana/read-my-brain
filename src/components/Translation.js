import React from 'react';
import PropTypes from 'prop-types';

const translationContainerStyle = {
  marginTop: '50px',
  marginRight: '10px',
  padding: '5px'
}

function Translation(props) {
  return (
    <React.Fragment>
      <div style={translationContainerStyle}>
        <p>{props.translation}</p>
      </div>
    </React.Fragment>
  );
}

Translation.propTypes = {
  translation: PropTypes.string
}

export default Translation;
