/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import './style.css';

const List = (): JSX.Element => {
  const [listForIndex, setListForIndex] = useState([{ id: 1 }, { id: 2 }]);
  const [listForId, setListForId] = useState([{ id: 1 }, { id: 2 }]);

  const renderListByIndex = listForIndex.map((item, index) => {
    const { id } = item;
    console.log(`This is index ${index}`);

    return (
      <div key={index}>
        <input defaultValue={`Item ${id}`} />
        <button
          type="button"
          style={{ margin: '5px' }}
          onClick={() => setListForIndex(listForIndex.filter((i) => i.id !== id))}
        >
          Remove
        </button>
      </div>
    );
  });

  const renderListById = listForId.map((item) => {
    const { id } = item;
    console.log(`This is id ${id}`);
    return (
      <div key={id}>
        <input defaultValue={`Item ${id}`} />
        <button
          type="button"
          style={{ margin: '5px' }}
          onClick={() => setListForId(listForId.filter((i) => i.id !== id))}
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <div className="flex-col">
      <div>
        <strong>key is index</strong>
        {renderListByIndex}
      </div>
      <div>
        <strong>key is id</strong>
        {renderListById}
      </div>
    </div>
  );
};

export default List;
