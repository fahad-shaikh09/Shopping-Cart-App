import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound"
import Products from "./Components/Products"
import DetailedProd from "./Components/DetailedProd"
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div>
      <h1>Welcome to our Store!</h1>
        
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route exact path="/products" element={<Products />} /> 
            <Route path="/products/:productID" element={<DetailedProd />} />  
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </div>
  );
}

export default App;
