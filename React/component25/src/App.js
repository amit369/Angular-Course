import './App.css';
import React from 'react';
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor");
    this.state = {
      count :0
    }
  }
  componentDidUpdate(preProps, prevState, snapshot)
  {
    console.warn("componentDidUpdate", prevState.count === this.state.count);
  }
  render()
  {
    console.warn("render");
  return (
    <div className="App">
          <h1>Component Did Update {this.state.count}</h1>
          <button onClick={() => { this.setState({ count : 1})}} >Update Name</button>
    </div>
  );
  }
}

export default App;
