import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';


function ProfileList(props) {
  return (
    <div>
      {props.userList.map((user, index) =>
        <Profile email={user.email}
          password={user.password}
          name={user.name}
          key={index}/>
      )}
    </div>
  );
}

ProfileList.propTypes = {
  userList: PropTypes.array
};

export default ProfileList;
