import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  const link = {
    textDecoration:'none',
    color: '#BA5624',
    marginRight: '10px'
  };

  return (
    <div>
      <style jsx>{`
        display: flex;
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        margin-right: 10px;
      `}</style>
      <Link style={link} to='/Home'>Home</Link>
      <Link style={link} to='/Profiles'>Profiles</Link>
      <Link style={link} to='/Search'>Search</Link>
      <Link style={link} to='/Login'>Login</Link>
      <p>or</p>
      <Link style={link} to='/SignUp'>Sign up!</Link>
    </div>
  );
}

export default Navbar;
