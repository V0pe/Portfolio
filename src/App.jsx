import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contents from './components/Contents';
import Certificate from './components/Certification';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Contents />
        <Certificate />
        <Contact />
      </div>
  )
}

export default App;
