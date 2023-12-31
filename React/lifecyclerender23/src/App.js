import './App.css';
import React from 'react';
import User from './User';
function App() {
  const [name,setName] = React.useState("Anil");
  return (
    <div className="App">
      <h1>Render method in React</h1>
      <User />
      <button onClick={() => setName("Sidhu")}> Update Name</button>
    </div>
  );
}

export default App;
