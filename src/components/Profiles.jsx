import React from 'react';
import UserProfileList from './UserProfileList';

function Profiles() {
  return (
    <div>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;
        h2 {
          font-size: 2rem;
          margin-top: 50px;
          color: #BA5624;
          margin-bottom: 20px;
        }
      `}</style>
      <h2>Users</h2>
      <UserProfileList />
    </div>
  );
}

export default Profiles;
