import React from 'react';

function Some({ title }: { title: string }): JSX.Element {
  console.log('some');

  return <h1>{title}</h1>;
}

export default React.memo(Some);
