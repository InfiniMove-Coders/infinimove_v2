import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/Projects';
import OurJourney from './pages/OurJourney';
import IndividualBlog from './pages/IndividualBlog';


const App = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="our-journey" element={<OurJourney/>}/>
      <Route path='individualblog' element={<IndividualBlog/> }/>
    </Routes>
);

export default App;
