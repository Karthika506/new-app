import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" width="100px" />
      <nav className="navbar">
        <h1>karthika profile</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
