import "./App.css";
import React from 'react';
import User from './User';
class App extends React.Component {

  constructor()
  {
    super();
    this.state = {
      count : 1
    }
  }
  render() {
    console.warn("Check re-rendering");
    return <div className="App">
      <User />
      <button onClick={() => this.setState({count : this.state.count+1})}>Update Count</button>
    </div>;
  }
}

export default App;
