import Logo from './Logo';
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to='/Home'><Logo /></Link>
      <Link to='/Home'>Home</Link>
      <Link to='/Profiles'>Profiles</Link>
      <Link to='/Search'>Search</Link>
      <Link to='/Login'>Login</Link>
      <p>or</p>
      <Link to='/SignUp'>SignUp</Link>
    </div>
  );
}

export default Navbar;
