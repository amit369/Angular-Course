import './App.css';
import React, {useState} from 'react';

function App() {
  let [val,setVal] = useState("100000");
  let [item,setItem] = useState("");
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text"  onChange={ (e) => setVal(e.target.value) } defaultValue="000"/>
      <br></br>
      <input type="text" value={item}  onChange={ (e) => setItem(e.target.value) }/>
    </div>
  );
}

export default App;
