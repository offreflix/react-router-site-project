import * as React from 'react';

import { NavLink } from 'react-router-dom';
import './style/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="https://github.com/Reflixzinhu">
        <p>Logo Empresa</p>
      </a>

      <ul className="nav">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'selected' : '')}
            to="/"
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'selected' : '')}
            to="/services"
          >
            Serviços
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'selected' : '')}
            to="/about"
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'selected' : '')}
            to="/contact"
          >
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            <span className="signup">Já tem uma conta?</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
