import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import PrivateRoute from '../helpers/verify-token'

function Monitoramento() {
  return (
    <div className="Monitoramento">
          Monitoramento page
          <Link to="/login">Ir para a página sobre \o/</Link>
      </div>
  );
}

export default Monitoramento;
