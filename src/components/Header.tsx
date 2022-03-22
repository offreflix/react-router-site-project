import * as React from 'react';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import './style/Header.css';

import { FiAlignJustify, FiX } from 'react-icons/fi';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <header className="header">
      <a href="https://github.com/Reflixzinhu">
        <p>Logo Empresa</p>
      </a>
      <nav>
        {!sidebar ? (
          <FiAlignJustify
            size={'2rem'}
            className="navIcon"
            onClick={showSidebar}
          />
        ) : (
          <FiX size={'2rem'} className="navIcon" onClick={showSidebar} />
        )}
        <div className={!sidebar ? 'navContainer' : 'navContainer clicked'}>
          <div className="navBackground">
            <ul className="nav">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                  to="/"
                  onClick={showSidebar}
                >
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                  to="/services"
                  onClick={showSidebar}
                >
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                  to="/about"
                  onClick={showSidebar}
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                  to="/contact"
                  onClick={showSidebar}
                >
                  Contato
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                  to="/signup"
                  onClick={showSidebar}
                >
                  <span className={'signup fullText'}>Já tem uma conta?</span>
                  <span className={'signup shortText'}>Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
