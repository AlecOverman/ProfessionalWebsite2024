import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <section id="home" className="navbar-section">
          <HomePage></HomePage>
      </section>
      <p>Coming Soon! (Updated Nov 6)</p>

    </div>
  );
}

export default App;
