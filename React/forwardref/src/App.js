import './App.css';
import React , { useRef } from 'react';
import User from './User';
function App() {
  let inputRef = useRef(null);
  function updateInput()
  {
    inputRef.current.value="1000";
    inputRef.current.style.color="pink";
    inputRef.current.focus();
  }
  return (
    <div className="App">
       <h1>forwardRef in react</h1>
       <User ref={inputRef} />
       <button onClick={updateInput}>Update InputBox</button>
    </div>
  );
}

export default App;
