import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  const link = {
    textDecoration:'none',
    color: '#BA5624',
  };

  return (
    <div>
      <style jsx>{`
        margin-top: 50px;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;
        h1 {
          font-family: 'Megrim', cursive;
          font-size: 10vh;
          margin-bottom: 40px;
          color: #BA5624;
          font-weight: bolder;
        }
      `}</style>
      <h1>band-aid</h1>
      <p>Band-Aid is a record collection and wishlist inventory management system. <Link style={link} to='/SignUp'>Join us</Link> or <Link style={link} to='/Login'>Login</Link> start managing your collection now!</p>
    </div>
  );
}

export default Home;
