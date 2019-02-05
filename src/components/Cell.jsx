import React, { useState } from 'react';

export default function Cell() {
  const [name, setName] = useState('Brian');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  return (
    <div>
      <input onChange={handleNameChange} />
      <div>Hi</div>
    </div>
  );
}
