/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { addAnimal } from '../../redux/reducers/animalsSlice';
import { useAppDispatch } from '../../redux/store';

function FormAddAnimal(): JSX.Element {
  const [name, setName] = useState('');
  const [img, setImg] = useState<FileList | null>(null);
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!img) {
      alert('Пожалуйста, добавьте фото лапочки.');
      return;
    }

    // Здесь вам нужно будет обработать файл, например, отправить на сервер
    // или преобразовать его в строку base64 и сохранить в состоянии.
    // Для примера показана отправка объекта FormData с файлом.
    const formData = new FormData();
    formData.append('name', name);
    for (let i = 0; i < img.length; i += 1) {
      formData.append('img', img[i]);
    }

    // dispatch вашего действия теперь будет отправлять formData
    dispatch(addAnimal(formData));

    // Очистка формы
    setImg(null);
    setName('');
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.files);

    if (e.target.files) {
      setImg(e.target.files);
    }
  };

  return (
    <div className="form__container">
      <form className="form__add-animal" onSubmit={onHandleSubmit}>
        <label className="form__label">
          Имя лапочки
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <label className="form__label">
          Фото лапочки
          <input onChange={onFileChange} type="file" multiple />
        </label>
        <button type="submit">Добавить лапочку</button>
      </form>
    </div>
  );
}

export default FormAddAnimal;
