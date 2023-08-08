import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setNumbers({ ...numbers, [e.target.name]: Number(e.target.value) });
  };

  const handleAddClick = () => {
    setResult(numbers.num1 + numbers.num2);
  };

  return (
    <div>
      <input type="number" name="num1" value={numbers.num1} onChange={handleInputChange} />
      <input type="number" name="num2" value={numbers.num2} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;