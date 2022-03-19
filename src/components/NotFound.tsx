import './style/NotFound.css';

import * as React from 'react';

import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notFound">
      <p>Essa página não existe.</p>
      <Link to="/">Retornar</Link>
    </div>
  );
}

export default NotFound;
