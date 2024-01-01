import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [data,setData] = useState(10);
  const [count,setCount] = useState(100);
 
  return (
    <div className="App">
      <User count={count} data={data} />
      {/* <h1>Count Props {count} </h1>
      <h1> Data Props: {data} </h1> */}
    
    </div>
  );
}

export default App;
