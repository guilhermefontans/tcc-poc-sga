import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AfetadosForm from '../pages/SegurancaComunicacao/AfetadoForm'
import IncidenteForm from '../pages/Monitoramento/IncidenteForm'
import Login from '../Login'
import PrivateRoute from '../helpers/verify-token'

export default function Routes(className) {

  return (
    <Switch className={className}>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/monitoramento/incidentes/novo" component={IncidenteForm} />
        <PrivateRoute exact path="/seguranca/afetados/novo" component={AfetadosForm} />
    </Switch>
  );
}