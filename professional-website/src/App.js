import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar">
        <section id="home" className="navbar-section"><h2>Home</h2>
          <p>Welcome to my professional website!</p>
        </section>
        
      </Navbar>
    </div>
  );
}

export default App;
