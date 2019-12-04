import React from 'react';

export default function UserCard({userObj}) {
  return (
    <div className="user-card">
      <h3>{userObj.name}</h3>
      <p>{userObj.location}</p>
    </div>
  )
}