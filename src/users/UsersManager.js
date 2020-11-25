import React, { useEffect, useState } from 'react';
import { dao } from '@speedingplanet/rest-server';
import UsersList from './UsersList';
import { Redirect, Route } from 'react-router-dom';
import UserDetailsRouter from './UserDetailsRouter';

export default function UsersManager() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promise = dao.findAllUsers();
    promise
      .then((response) => {
        // Successful
        setUsers(response.data);
      })
      .catch((error) => {
        // Error or problem
        console.error('Problem fetching users: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Users Manager</h2>
      <Route path="/users/list">
        <UsersList users={users} />
      </Route>
      <Route path="/users/detail/:userId">
        <UserDetailsRouter />
      </Route>
      <Route path="/users" exact>
        <Redirect to="/users/list" />
      </Route>
    </div>
  );
}
