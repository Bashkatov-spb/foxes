import React, { useState } from 'react';
import Some from './Some';

export default function Memo(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const title = 'Hello, React!';
  console.log(title);
  console.log('Memo');

  return (
    <>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Click: {counter}
      </button>
      <Some title={title} />
    </>
  );
}
