import React from 'react';
import PropTypes from 'prop-types';

function UserProfile(props) {
  return (
    <div>
      <style jsx>{`
        font-size: 20px;
        color: #617073;
        margin-bottom: 10px;
      `}</style>
      <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>
        <li>{props.name}</li>
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string
};

export default UserProfile;
