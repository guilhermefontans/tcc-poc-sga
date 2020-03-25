import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login/Login';
import Monitoramento from './Monitoramento/Monitoramento';
import IncidenteForm from './Monitoramento/IncidenteForm';
import AfetadosForm from './SegurancaComunicacao/AfetadoForm';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import PrivateRoute from './helpers/verify-token'

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/monitoramento" component={Monitoramento} />
            <PrivateRoute exact path="/monitoramento/incidentes/novo" component={IncidenteForm} />
            <PrivateRoute exact path="/seguranca/afetados/novo" component={AfetadosForm} />
        </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
