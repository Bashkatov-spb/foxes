/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';

export default function CallBe4ik(): JSX.Element {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const func = (message: string): void => console.log(message);

  const addInConsole = useCallback(func, [text]);

  useEffect(() => {
    addInConsole(text);
  }, [addInConsole, text]);

  return (
    <>
      <input type="text" onChange={(event) => setText(event.target.value)} value={text} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Already {count} clicks
      </button>
      {/* <Item addInConsole={addInConsole} /> */}
    </>
  );
}
