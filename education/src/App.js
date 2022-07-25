import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p><img src="./logo.png" alt="logo"></img></p>
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>SERVICE</p>
        <p>CONTACT</p>
        <p><button>LOG IN</button></p>
      </div>
      <div id='content'>
        <div id='left'>
          <h1>ONLINE</h1>
          <h1 className="h1">EDUCATION</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <img src="./image.png" alt="image"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
