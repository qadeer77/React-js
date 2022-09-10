import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = (value) =>{
    console.log(`value is = ${value}`)
  }
  return (
    <div className="App">
      <button onClick={()=>handleClick('qadeer')}>Click Me </button>
      
    </div>
  );
}

export default App;
