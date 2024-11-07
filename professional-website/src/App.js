import './App.css';
import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";
import FloatingCodeBackground from "./components/FloatingCodeBackground.js";
import FadingText from './components/FadingText';


function App() {
  const texts = ["Hello, world!", "Welcome to my site", "Enjoy your stay", "Contact me anytime!"];

  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <section id="home" className="navbar-section">
          <HomePage></HomePage>
      </section>
      <FloatingCodeBackground />
      <FadingText texts={texts} interval={3000} />

    </div>
  );
}

export default App;
