import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './NavBar.css'; 
const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/products' },
  { name: 'Carrito', href: '/cart' },
  { name: 'Acerca de', href: '/about' },
];

const NavBar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}>
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{

            fontSize: '24px',
            fontWeight: 'light',
            transition: 'color 0.3s ease',
          }}
        >
          Golden Pocket Edition.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={link.href}
                  style={{
                    fontSize: '18px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="toggle-button text-secondary dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            {isDarkMode ? <FaSun style={{ marginLeft: '8px' }} /> : <FaMoon style={{ marginLeft: '8px' }} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
