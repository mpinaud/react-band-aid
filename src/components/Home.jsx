import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Band-Aid</h1>
      <p>Band-Aid is a record collection and wishlist inventory management system. <Link to='/SignUp'>Join us</Link> or <Link to='/Login'>Login</Link> start managing your collection now!</p>
    </div>
  );
}

export default Home;
