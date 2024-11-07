import './App.css';
import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";
import FloatingCodeBackground from "./components/FloatingCodeBackground.js";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <section id="home" className="navbar-section">
          <HomePage></HomePage>
      </section>
      <FloatingCodeBackground />

    </div>
  );
}

export default App;
