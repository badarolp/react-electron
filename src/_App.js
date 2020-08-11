import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems(['Teste',...items]);
  }

  return (
    <div>
      <h1>Hello World</h1>
      {items.map(item => (
        <h3>{item}</h3>
      ))}
      <button onClick={handleClick} >Teste</button>
    </div>
  );
}

export default App;
