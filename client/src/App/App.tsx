/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../features/navbar/NavBar';
import MainPage from '../features/main/MainPage';
import ErrorPage from '../features/404/404';
import UsersPage from '../features/users/UsersPage';
import AnimalsPage from '../features/animals/AnimalsPage';
import AnimalPage from '../features/animals/AnimalPage';
import SignIn from '../features/auth/SignIn';
import SignUp from '../features/auth/SignUp';
import { loadAnimals, stopLoading } from '../redux/reducers/animalsSlice';
import { useAppDispatch } from '../redux/store';
import { checkUser } from '../redux/reducers/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // api.fetchAnimals().then((data) => dispatch({ type: 'animals/load', payload: data }));
    // api.fetchUsers().then((data) => dispatch({ type: 'users/load', payload: data }));
    // api.fetchCheckUser().then((data) => dispatch({ type: 'auth/checkUser', payload: data }));
    dispatch(loadAnimals())
    dispatch(checkUser());
    setTimeout(() => dispatch(stopLoading()), 2000);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/animals/:animalId" element={<AnimalPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
