import React from 'react';

function App(props) {

  return (
    <React.Fragment>
      <div id="aboutContainer">
        <h2>What Brain?</h2>
        <p>Not just any brain -- a <em>nursing</em> brain.</p>
        <p>So what are these brains? Nursing 'brain' sheets -- or simply known as <strong><a href="https://allnurses.com/nursing-brain-sheets-beginners-t566048/">brains</a></strong>, are report sheets that contain handwritten information, most often chicken scratch, to remember about their patients. A patient's diagnosis, medical history, lab values, medications, treatment schedule, and discharge plans are among many things a nurse has to write down within just a few minutes during change of shift. They have to start writing down a bunch of shorthands and acronyms to write everything down more efficiently.</p>

        <h2>Whose Brain?</h2>
        <p>This application aims to empower future nurses and caregivers by helping them understand medical charts quicker, better, easier and less stressful!</p>

        <h4 onClick={() => props.onClickingGetStarted(true)}>Start <span className="appName">readmybrain</span> now!</h4>

        <h3>Found a bug, broken feature or a brain fart?</h3>
        <h4><a href="mailto:adela.yohana@gmail.com" target="_blank">Let me know!</a></h4>
        <h4><a href="https://github.com/ayohana/" target="_blank">Source: GitHub repo</a></h4>
      </div>
    </React.Fragment>
  );
}

export default App;
