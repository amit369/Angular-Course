import './App.css';

function App() {
  const students = ['Anil','Sidhu','Sam','Peter'];
  
  students.map((item) => {
    console.warn("My name is ", item);
  })

  for(let i=0;i<students.length;i++)
  {
    console.warn("in for loop my nam is ", students[i]);
  }
  return (
    <div className="App">
      {
        students.map((data) => <h1> Name is : {data}</h1>)
      }
    
    </div>
  );
}

export default App;
