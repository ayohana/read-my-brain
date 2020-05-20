import React from 'react';

function Modal(props) {
  return (
    <React.Fragment>
      <div id="modalContainer">
        <div id="modalContent">
          <span id="closeIcon" onClick={() => props.onClosingModal(true)}>&times;</span>
          <h2>Hello there, future caregiver!</h2>
          <h3>Thanks for using Read My Brain! Here's a little friendly reminder for you:</h3>
          <h3>Please be aware of the contents of your brain especially if it contains real patient private information. Ever heard of <a className="modalLink" href="https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html" target="_blank">HIPAA</a>? If you must, don't forget to turn on private browsing on your device! </h3>
          <h3>Thanks for agreeing to protecting patients' privacy!</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
