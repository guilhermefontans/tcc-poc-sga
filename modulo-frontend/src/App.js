import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
          App Page
          <Link to="/login">Ir para a página sobre \o/</Link>
      </div>
  );
}

export default App;
