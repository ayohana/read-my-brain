import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  return (
    <React.Fragment>
      <div id="modalContainer">
        <div id="modalHeader">
          <span id="closeIcon" onClick={() => props.onClosingModal(true)}>&times;</span>
          <h3 id="modalHeaderText">Hello there, future caregiver!</h3>
        </div>
        <div id="modalContent">
          <p>Thanks for using <span className="appName">readmybrain</span>! Here's a little friendly reminder for you.</p>
          <p>Ever heard of <a className="modalLink" href="https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html" target="_blank" rel="noopener noreferrer">HIPAA</a>? Please be aware of the contents of your brain especially if it contains real patient private information.  If you must, don't forget to turn on private browsing on your device! </p>
          <p>Thanks for agreeing to protecting patients' privacy!</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Modal.propTypes = {
  onClosingModal: PropTypes.func
}

export default Modal;
