import React from 'react';
import ProfileList from './ProfileList';
import PropTypes from 'prop-types';

function Profiles(props) {
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
      <ProfileList userList={props.userList}/>
    </div>
  );
}

Profiles.propTypes = {
  userList: PropTypes.array
};

export default Profiles;
