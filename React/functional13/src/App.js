import Student from './Student';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Props in React :)</h1>
      <Student name={"anil"} email="anil@gmail.com" other={{ address: "delhi", mobile : "000"}} />
      <Student name={"anil"} email="anil@gmail.com" other={{ address: "delhi", mobile : "001"}} />
      <Student name={"anil"} email="anil@gmail.com" other={{ address: "delhi", mobile : "002"}}/>
    </div>
  );
}

export default App;
