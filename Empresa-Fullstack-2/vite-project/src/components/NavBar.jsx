import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function NavBar() { 
  const { totalUnidades } = useCart();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <span>LEVEL-UP GAMER</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarFS2">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarFS2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro">Registro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/carrito">
                  🛒 
                  <span id="cartCount" className="badge text-bg-light">
                    {totalUnidades}
                  </span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="adminMenu" role="button" data-bs-toggle="dropdown">Admin</a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/admin">Productos</Link></li>
                  <li><a className="dropdown-item" href="#">Usuarios (Demo)</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar; // O "Navbar"