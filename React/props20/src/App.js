import User from './User';
import './App.css';

function App() {
  function getData()
  {
    alert("Hello from app");
  }
  return (
    <div className="App">
      <User data={getData} />
    </div>
  );
}

export default App;
