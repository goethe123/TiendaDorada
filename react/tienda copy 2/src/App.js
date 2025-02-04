import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Inicio from './pages/Inicio'; 
import Acerca from './pages/Acerca'; 
import 'animate.css';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path ="/about" element={<Acerca/>}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
