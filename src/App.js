import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './view/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slide from './components/slide/Slides';
import Slidess from './components/Slidess/Slidess';


const App = () => {
  return (
    <Router className="apcs">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/header" element={<Header />} /> */}
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
      {/* <Footer /> */}
      
    </Router>
  );
};
export default App;
