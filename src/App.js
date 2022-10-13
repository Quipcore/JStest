import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          Hello World  
        </a>
        <button onClick={log}>
          Click me!
        </button>
        <button onClick={() =>{
          console.log("Hello World");
          return (<h1>Hello There</h1>);
        }}>
          Press me!½
        </button>
      </header>
    </div>
  );
}

function log(){
  console.log("Hello World");
}

export default App;
