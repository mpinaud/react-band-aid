import React from 'react';
import Home from './Home';
import Login from './Login';
import Logo from './Logo';
import Profiles from './Profiles';
import Search from './Search';
import SignUp from './SignUp';

function Navbar() {
  return (
    <div>
      <Logo />
      <Home />
      <Profiles />
      <Search />
      <Login />
      or
      <SignUp />
    </div>
  );
}

export default Navbar;
