import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css';
import Home from './pages/Home';
import Comparison from './pages/Comparison';
import Timeline from './pages/Timeline';
import Features from './components/Features';



function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/comparison" element={<Comparison/>} />
        <Route path="/timeline" element={<Timeline/>} />
        </Routes>
    </Router>
  );
}

export default App;