import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from './components/Drawer';
import { Switch, Route } from 'react-router-dom';
import AfetadosForm from './pages/SegurancaComunicacao/AfetadoForm'
import IncidenteForm from './pages/Monitoramento/IncidenteForm'
import FormTest from './pages/FormTest'
import Login from './Login'
import PrivateRoute from './helpers/verify-token'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
          <div className={classes.toolbar} />
          <div className={classes.root}>
            <ResponsiveDrawer classes={classes}/>
            <main className={classes.content}>
              <Switch >
                <Route exact path="/" render={() => <div>Home</div>} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/monitoramento/incidentes/novo" component={IncidenteForm} />
                <PrivateRoute exact path="/form" component={FormTest} />
                <PrivateRoute exact path="/seguranca/afetados/novo" component={AfetadosForm} />
              </Switch>
            </main>
          </div>
    </BrowserRouter>
  );
}

export default App;
