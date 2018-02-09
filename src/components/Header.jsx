import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

function Header(){
  const link={
    textDecoration:'none',
  };

  return (
    <div>
      <style jsx>{`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        height: 100px;
      `}</style>
      <Link style={link} to='/Home'><a><Logo /></a></Link>
      <Navbar />

    </div>
  );
}

export default Header;
