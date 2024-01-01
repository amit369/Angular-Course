import "./App.css";
import React, { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const multiCountMemo = useMemo(function multiCount() {
    console.warn("multicount");
    return count * 5;
  }, [count]);

  return (
    <div className="App">
      <h1>Use Memo Hook in React</h1>
      <h2>{count}</h2>
      <h2>{item}</h2>
      <h2>{multiCountMemo()} </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setItem(item * 10);
        }}
      >
        Update Item
      </button>
    </div>
  );
}

export default App;
