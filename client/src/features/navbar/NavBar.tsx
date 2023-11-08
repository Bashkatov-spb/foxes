/* eslint-disable @typescript-eslint/consistent-type-imports */
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.scss';
import { RootState, useAppDispatch } from '../../redux/store';
import logo from '../../assets/fox.png';
import { fetchLogOut } from '../../App/api';

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const logOut = (): void => {
    fetchLogOut()
      .then((data) => data.message === 'success' && dispatch({ type: 'auth/logOut' }))
      .catch(console.log);
  };
  return (
    <>
      <div className="nav__container">
        <ul className="nav__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink to="/sign-in">Sign-in</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign-up</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink onClick={logOut} to="/">
                logout{' '}
              </NavLink>
            </li>
          )}
        </ul>
        <img className="nav__logo" src={logo} alt="logo" />
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
