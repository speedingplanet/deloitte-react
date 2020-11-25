import React from 'react';
import { Link } from 'react-router-dom';

export default function UsersList({ users }) {
  return (
    <div>
      {/* Build a table of users */}
      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/detail/${user.id}`}>{user.displayName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
