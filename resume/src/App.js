import React, {Component} from 'react';
import Main from './pages/Main';
import Home from './pages/Home'
import Me from './pages/Myself'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';

import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    // <Router>
    <HashRouter>
      <Routes>
        <Route path="/test" element={<Main/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/me" element={<Me/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </HashRouter>
    // </Router>
  );
}

export default App;
