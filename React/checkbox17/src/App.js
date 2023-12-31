import './App.css';
import {useState} from 'react';
function App() {
   
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
   function getFormData(e)
  {
    console.warn(name,tnc,interest);
    e.preventDefault();

  }
  return (
    <div className="App">
      <h1>Handle Form in React </h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
        <select onChange={(e) => setInterest(e.target.value)}>
           <option>Select options</option>
           <option>Marvel</option>
           <option>DC</option>
        </select> <br></br>
        <input type="checkbox" onChange={ (e) => setInterest(e.target.checked)}/>
        <span> Accept Terms and Conditions </span>
        <br></br>
        <button type="submit">Submit</button>
        <button type="clear">Clear</button>
      </form>
    </div>
  );
}

export default App;
