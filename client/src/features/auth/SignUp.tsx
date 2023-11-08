/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { signUp } from '../../redux/reducers/authSlice';

const SignUp = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const user = useSelector((store: RootState) => store.auth.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const onHandlePlayerAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch(signUp({ name, password, email }));
  };

  return (
    <>
      <h1>SignUp</h1>
      <div>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onHandlePlayerAdd}>
          <label htmlFor="d">
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" />
          </label>
          <label htmlFor="a">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
            />
          </label>

          <label htmlFor="d">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="text"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
