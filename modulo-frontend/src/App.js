import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import GlobalStyle, { Container } from './styles';
import Sidebar from './components/Sidebar/index';
import Routes from './routes'

const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'monitoramento',
    label: 'Módulo de monitoramento',
    items: [
      { name: 'incidentes', label: 'Incidentes', link: '/' },
      { name: 'cadastrarIncidentes', label: 'Cadastrar incidentes', link: '/monitoramento/incidentes/novo' },
    ],
  },
  {
      name: 'seguranca',
      label: 'Módulo de Segurança e comunicação',
      items: [
        { name: 'afetados', label: 'Afetados', link: '/' },
        { name: 'cadastrarIncidentes', label: 'Cadastrar afetados', link: '/seguranca/afetados/novo' },
      ],
  },
]

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Sidebar items={items}/>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
