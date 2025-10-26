import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/Projects';
import OurJourney from './pages/OurJourney';
import IndividualBlog from './pages/IndividualBlog';
import Services from './pages/Services';
import ScrollToTop from './components/Navbar/ScrollToTop';


const App = () => (
  <Router basename={import.meta.env.BASE_URL}>
  <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/our-journey" element={<OurJourney/>}/>
      <Route path="/blogs/:id" element={<IndividualBlog />} />
      <Route path='/services' element={<Services/>} />
    </Routes>
    </Router>
);

export default App;
