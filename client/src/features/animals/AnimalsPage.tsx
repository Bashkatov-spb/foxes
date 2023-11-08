/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import AnimalItem from './AnimalItem';
import './styles/Animals.scss';
import FormAddAnimal from './FormAddAnimal';
import type { RootState } from '../../redux/store';
import spinner from '../../assets/Spinner-1s-200px.svg';

function AnimalsPage(): JSX.Element {
  const animals = useSelector((store: RootState) => store.animals.animals);
  const error = useSelector((store: RootState) => store.animals.error);
  const loading = useSelector((store: RootState) => store.animals.loading);

  const checkError = <h1 style={{ color: 'red' }}>{error}</h1>;
  const spin = <img src={spinner} alt="preloader" />;
  const content = (
    <>
      <FormAddAnimal />
      <div className="animals__container">
        {animals.map((animal) => (
          <AnimalItem key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );

  return <>{loading ? spin : <div>{error ? checkError : content}</div>}</>;
}

export default AnimalsPage;
