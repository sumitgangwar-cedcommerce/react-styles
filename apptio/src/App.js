import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div>
          <img src='./aaaaa.png' alt="#"></img>
        </div>
        <div className="navigation">
          <div>Solutions</div>
          <div>Products</div>
          <div>Resources</div>
          <div>Company</div>
          <div><button>Get Started</button></div>
          <div><i class="fa-solid fa-magnifying-glass"></i> Search</div>
        </div>
      </div>
      <div id='content'>
        <div>
          <h1>Get Started with Apptio Today</h1>
          <p>talk to an Appito expert about your specific needs and see a live product demonstration. Discuss current challanges and find the right application for your use case.</p>
        </div>
        <div>
          <table>
            <tr>
              <td><input type='name' placeholder='First Name'></input></td>
              <td><input type='name' placeholder='Last Name'></input></td>
            </tr>
            <tr>
              <td><input type='name' placeholder='Work Email'></input></td>
              <td><input type='name' placeholder='Phone'></input></td>
            </tr>
            <tr>
              <td><input type='name' placeholder='Company'></input></td>
              <td><input type='number' placeholder='Job Function'></input></td>
            </tr>
            <tr>
              <td colSpan={2}><input type='number' placeholder='Country'></input></td>
            </tr>
            <tr>
              <td colSpan={2}><input type='textarea' placeholder='How Can We Help?'></input></td>
            </tr>
            <tr>
              <td colSpan={2}><button>Get Satrted</button></td>
            </tr>
          </table>
          
        </div>
      </div>
    </div>
  );
}

export default App;
