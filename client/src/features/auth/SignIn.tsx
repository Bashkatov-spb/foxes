import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchSignIn } from '../../App/api';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onHandlePlayerAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    fetchSignIn({ email, password }).then((data) => {
      dispatch({ type: 'auth/sign-in', payload: data });
      navigate('/');
    });
  };

  return (
    <>
      <h1>SignIn</h1>
      <div>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onHandlePlayerAdd}>
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

export default SignIn;
