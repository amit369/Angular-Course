import './App.css';
import './style.css';
import style from './custom.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='primary'> Style type 1 in React js</h1>
      <h2 style={{ color : 'red', backgroundColor : 'blue'}}>Style type 2 in React js</h2>
      <h2 style={{ color : 'red', backgroundColor : 'blue'}}>Style type 3 in React js</h2>
      
    </div>
  );
}

export default App;
