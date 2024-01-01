import "./App.css";
import React, { Fragment } from "react";
import User from "./User";
function App() {
  let data="Anil Sidhu";
  function parentAlert(data)
  {
    alert(data);
  }
  return (
    <div>
      <h1>Lifting State Up</h1>
      <User alert={parentAlert} />
    </div>
  );
}

export default App;
