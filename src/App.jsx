import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contents from './components/Contents';
import Certificate from './components/Certification';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Contents />
        <Certificate />
      </div>
  )
}

export default App;
