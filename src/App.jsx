import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contents from './components/Contents';
import Certificate from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Contents />
        <Certificate />
        <Contact />
        <Footer />
      </div>
  )
}

export default App;
