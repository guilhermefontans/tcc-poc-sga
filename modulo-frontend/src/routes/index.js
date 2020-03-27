import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AfetadosForm from '../pages/SegurancaComunicacao/AfetadoForm'
import IncidenteForm from '../pages/Monitoramento/IncidenteForm'
import Login from '../Login/Login'
import PrivateRoute from '../helpers/verify-token'

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/monitoramento/incidentes/novo" component={IncidenteForm} />
        <PrivateRoute exact path="/seguranca/afetados/novo" component={AfetadosForm} />
    </Switch>
  );
}