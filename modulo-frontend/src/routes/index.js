import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AfetadosForm from '../pages/SegurancaComunicacao/AfetadoForm'
import IncidenteForm from '../pages/Monitoramento/IncidenteForm'
import AfetadosList from '../pages/SegurancaComunicacao/AfetadosList'
import AreasList from '../pages/SegurancaComunicacao/AreaList'
import Home from '../pages/Home'
import IncidentesList from '../pages/Monitoramento/IncidenteList'
import Login from '../Login'
import PrivateRoute from '../helpers/verify-token'

export default function Routes() {

  return (
    <Switch >
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/monitoramento/incidentes/novo" component={IncidenteForm} />
      <PrivateRoute exact path="/seguranca/afetados/novo" component={AfetadosForm} />
      <PrivateRoute exact path="/seguranca/afetados" component={AfetadosList} />
      <PrivateRoute exact path="/seguranca/areas" component={AreasList} />
      <PrivateRoute exact path="/monitoramento/incidentes" component={IncidentesList} />
  </Switch>
  );
}