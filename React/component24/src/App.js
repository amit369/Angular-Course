import './App.css';
import React from 'react';
class App extends React.Component {
  constructor()
  {
    super();
    console.log('constructor');
    this.state = {
      name : "Anil"
    }
  }
  componentDidMount()
  {
   console.log("Component Did Mount"); 
  }
  render()
  {
    console.warn("render");
    return (
      <div className="App">
         <h1>Component Did Mount {this.state.name}</h1>
         <button onClick={() => { this.setState({ name : 'sidhu'})}}>Update Name</button>
      </div>
    );
  }
 
}

export default App;
