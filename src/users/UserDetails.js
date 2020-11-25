import React from 'react';

export default function UserDetails({ user }) {
  return (
    <div>
      <h3>User Details</h3>
      <ul>
        <li>{user.displayName}</li>
        <li>{user.address.street}</li>
        <li>
          {user.address.city}, {user.address.state} {user.address.postalCode}
        </li>
      </ul>
    </div>
  );
}
