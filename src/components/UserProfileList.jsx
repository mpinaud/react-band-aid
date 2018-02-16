import React from 'react';
import UserProfile from './UserProfile';

const masterUserProfileList = [
  { 
    name: 'Adam Smith'
  },
  {
    name: 'M|KEY N|GHTCH|LDE'
  },
  {
    name: 'tbssnch'
  },
  {
    name: 'Lena'
  },
  {
    name: 'Collin'
  },
  {
    name: 'Stephanie'
  },
  {
    name: 'Laura Leon'
  },
  {
    name: 'Hannah'
  },
  {
    name: 'Crane'
  }
];

function UserProfileList() {
  return (
    <div>
      {masterUserProfileList.map((user, index) =>
        <UserProfile name={user.name}
          key={index}/>
      )}
    </div>
  );
}

export default UserProfileList;
