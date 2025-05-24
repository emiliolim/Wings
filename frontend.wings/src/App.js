import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home.js'
import  Login  from './pages/Login.js'
import { Showcase } from './pages/Showcase.js'
import SignUp from './pages/SignUp.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/showcase" element={<Showcase />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
