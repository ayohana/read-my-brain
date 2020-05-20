import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <h1 id="header" onClick={() => props.onClickingHeaderContent(true)}>readmy  
        <span id="bColor">b</span>
        <span id="rColor">r</span>
        <span id="aColor">a</span>
        <span id="iColor">i</span>
        <span id="nColor">n</span>
      </h1>
      <p id="subheader"><span className="headerLinks" onClick={() => props.onClickingHeaderContent(false)}>About</span> | by <a className="headerLinks" href="https://github.com/ayohana/" target="_blank">ayohana</a> © 2020 </p>
    </React.Fragment>
  );
}

export default Header;
