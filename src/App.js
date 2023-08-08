import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={e => setNum1(+e.target.value)} />
      <input type="number" value={num2} onChange={e => setNum2(+e.target.value)} />
      <button onClick={addNumbers}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;