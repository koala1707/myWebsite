import React from 'react';
import Home from './pages/Home'
import Me from './pages/Myself'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/me" element={<Me/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
