import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Watch from './components/Watch';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Watch</Link> <Link to="/timer">Timer</Link> <Link to="/stopwatch">Stopwatch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Watch />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </Router>
  );
}

export default App;
