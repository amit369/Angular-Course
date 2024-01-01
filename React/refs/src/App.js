import './App.css';
import React , {createRef} from  'react';
class App extends React.Component {
 
  constructor()
  {
    super();
    this.inputRef = createRef();
  }
  
  getVal()
  {
    console.warn(this.inputRef.current.value);
  }
  render()
  {
  return (
    <div className="App">
            <h1>Ref in React </h1>
            <input type="text" ref={this.inputRef} />
            <button onClick={()=> this.getVal()}>Check Ref</button>
    </div>
  );
  }
}

export default App;
