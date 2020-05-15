import React from 'react';

const headerStyle = {
  textAlign: 'center',
  lineHeight: '100%',
  letterSpacing: '0.20em'
}

function Header() {
  return (
    <React.Fragment>
      <div style={headerStyle}>
      <h1>read my brain</h1>
      <p>by <a href="https://github.com/ayohana/">ayohana</a></p>
      </div>
    </React.Fragment>
  );
}

export default Header;
