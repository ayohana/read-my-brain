import React from 'react';
import PropTypes from 'prop-types';

function Translation(props) {
  return (
    <React.Fragment>
      {/* <h1>This is a Translation</h1> */}
      <p>{props.translation}</p>
    </React.Fragment>
  );
}

Translation.propTypes = {
  translation: PropTypes.string
}

export default Translation;
