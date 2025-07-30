// Example structure for App.jsx

import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './NavComponents/About';
import Home from './NavComponents/Home';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './NavComponents/Portfolio';
import Contact from './NavComponents/Contact';

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    
     
    </>
  );
}

export default App;
