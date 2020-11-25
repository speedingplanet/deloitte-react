import React from 'react';

export default function UserDetails({ user }) {
  return (
    <div>
      <h3>User Details</h3>
      <ul>
        <li>Display name goes here</li>
        <li>Street</li>
        <li>City, state, zip</li>
      </ul>
    </div>
  );
}
