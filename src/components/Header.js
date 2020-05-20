import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <React.Fragment>
      <div id="navbar">
        <ul>
          <li id="header" onClick={() => props.onClickingHeaderContent(true)}>readmybrain</li>
          <li>© 2020</li>
          <li className="headerLinks" onClick={() => props.onClickingHeaderContent(false)}>About</li>
          <li><a className="headerLinks" href="https://github.com/ayohana/">Contact</a></li>
        </ul>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  onClickingHeaderContent: PropTypes.func
}

export default Header;
