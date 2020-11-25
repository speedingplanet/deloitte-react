import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dao } from '@speedingplanet/rest-server';
import UserDetails from './UserDetails';

export default function UserDetailsRouter() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    dao
      .findUserById(userId)
      .then(({ data }) => setUser(data))
      .catch((error) => console.error('Unable to find user: ', error));
  }, [userId]);

  if (user) {
    return <UserDetails user={user} />;
  } else {
    return <p>Searching for {userId} ... </p>;
  }
}
