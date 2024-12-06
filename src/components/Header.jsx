import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="https://www.cibertec.org/wp-content/uploads/2016/10/logo.png" alt="Logo" />
        </div>
        <div className="user-info">
          {user ? (
            <>
              <span>Hola, {user?.username}</span>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
