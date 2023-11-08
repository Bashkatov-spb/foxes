/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import type { RootState } from '../../redux/store';
import './styles/Users.scss';

function UsersPage(): JSX.Element {
  const { users } = useSelector((store: RootState) => store.users);
  return (
    <div className="users__container">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersPage;
