import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/monitoramento/incidentes/novo">cadastrar incidente</Link>
          <Link to="/seguranca/afetados/novo">cadastrar afetado</Link>
      </div>
  );
}

export default App;
