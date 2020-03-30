import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AfetadosForm from '../pages/SegurancaComunicacao/AfetadoForm'
import IncidenteForm from '../pages/Monitoramento/IncidenteForm'
import AfetadosList from '../pages/SegurancaComunicacao/AfetadosList'
import FormTest from '../pages/FormTest/index'
import Login from '../Login'
import PrivateRoute from '../helpers/verify-token'

export default function Routes() {

  return (
    <Switch >
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/monitoramento/incidentes/novo" component={IncidenteForm} />
      <PrivateRoute exact path="/form" component={FormTest} />
      <PrivateRoute exact path="/seguranca/afetados/novo" component={AfetadosForm} />
      <PrivateRoute exact path="/seguranca/afetados" component={AfetadosList} />
  </Switch>
  );
}