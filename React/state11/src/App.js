import {useState} from 'react';
import './App.css';

function App() {
  
  const [data,setData] = useState(0);
  function updateData()
  {
    setData(data+1);
  }
  console.warn("_____________");
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
