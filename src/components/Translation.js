import React from 'react';
import PropTypes from 'prop-types';

function Translation(props) {
  return (
    <React.Fragment>
      <p>{props.currentlyVisibleMessage}</p>
      <br />
      <p>{props.translation}</p>
    </React.Fragment>
  );
}

Translation.propTypes = {
  currentlyVisibleMessage: PropTypes.string,
  translation: PropTypes.string
}

export default Translation;
