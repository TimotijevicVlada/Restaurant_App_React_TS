import React from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Admin from './components/Admin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;