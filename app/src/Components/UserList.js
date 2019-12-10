import React from 'react';
import UserCard from './UserCard';


export default function UserList(props) {
  const { userData } = props;

  return (
    <div className="users-container">
      {
        userData.map(userObj => {
          return <UserCard userObj={userObj} />;
        })
      }    
    </div>
  )
}