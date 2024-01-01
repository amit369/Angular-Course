import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Button onClick={()=> alert("hello")}>Click Me</Button>
    </div>
  );
}

export default App;
