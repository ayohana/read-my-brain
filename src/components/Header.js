import React from 'react';

const headerStyle = {
  fontFamily: 'Balsamiq Sans, cursive',
  textAlign: 'center',
  lineHeight: '80%',
  letterSpacing: '0.1em',
}

const subheaderStyle = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'smaller',
  textAlign: 'center',
  lineHeight: '0%'
}

const bColor = {
  color: 'rgb(83,146,164)'
}

const rColor = {
  color: 'rgb(128,174,128)'
}

const aColor = {
  color: 'rgb(162,115,105)'
}

const iColor = {
  color: 'rgb(141,93,137)'
}

const nColor = {
  color: 'rgb(182,166,110'
}

function Header() {
  return (
    <React.Fragment>
      <h1 style={headerStyle}>readmy  
        <span style={bColor}>b</span>
        <span style={rColor}>r</span>
        <span style={aColor}>a</span>
        <span style={iColor}>i</span>
        <span style={nColor}>n</span>
      </h1>
      <p style={subheaderStyle}>by <a href="https://github.com/ayohana/">ayohana</a> © 2020</p>
    </React.Fragment>
  );
}

export default Header;
