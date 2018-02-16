import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
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

Profile.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  name: PropTypes.string
};

export default Profile;
