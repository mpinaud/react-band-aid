import React from 'react';
import Profile from './Profile';

const masterProfileList = [
  {
    email: '',
    password: '',
    name: 'Adam Smith'
  },
  {
    email: '',
    password: '',
    name: 'M|KEY N|GHTCH|LDE'
  },
  {
    email: '',
    password: '',
    name: 'tbssnch'
  },
  {
    email: '',
    password: '',
    name: 'Lena'
  },
  {
    email: '',
    password: '',
    name: 'Collin'
  },
  {
    email: '',
    password: '',
    name: 'Stephanie'
  },
  {
    email: '',
    password: '',
    name: 'Laura Leon'
  },
  {
    email: '',
    password: '',
    name: 'Hannah'
  },
  {
    email: '',
    password: '',
    name: 'Crane'
  }
];

function UserProfileList() {
  return (
    <div>
      {masterProfileList.map((user, index) =>
        <Profile email={user.email}
          password={user.password}
          name={user.name}
          key={index}/>
      )}
    </div>
  );
}

export default UserProfileList;
