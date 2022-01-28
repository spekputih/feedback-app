import React from 'react';

function Header({ text }) {
  return <header>
      <div className='container'>
          {text}
      </div>
  </header>;
}

Header.defaultProps = {
    text: 'Feedback UI'
}

export default Header;
