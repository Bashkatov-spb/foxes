import React from 'react';
import type { User, UserId } from './types/User';
import { fetchUserChangeAdminStatus, fetchUserRemove } from '../../App/api';
import { useAppDispatch } from '../../redux/store';

function UserItem({ user }: { user: User }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleRemove = (id: UserId): void => {
    fetchUserRemove(id).then(
      (data) => data.message === 'success' && dispatch({ type: 'users/DIE', payload: id }),
    );
  };

  const onHandleChangeAdminStatus = (id: UserId): void => {
    fetchUserChangeAdminStatus(id).then(
      (data) =>
        data.message === 'success' && dispatch({ type: 'users/changeAdminStatus', payload: id }),
    );
  };

  return (
    <div className="user__container">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => onHandleRemove(user.id)} type="button">
        DIE
      </button>
      <input
        type="checkbox"
        checked={user.isAdmin}
        onChange={() => onHandleChangeAdminStatus(user.id)}
      />
    </div>
  );
}

export default UserItem;
