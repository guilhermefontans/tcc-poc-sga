import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import ResponsiveDrawer from './components/Drawer';
import Grid from '@material-ui/core/Grid';
import Routes from './routes'
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import Login from './Login'

  const theme = createMuiTheme({
      palette: {
        primary: teal,
        secondary: {
          main: '#aed581',
        },
        type: 'dark'
      },
      
    });
      
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
    zIndex : theme.zIndex.drawer +1
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const token = 1;
  if (! localStorage.getItem("token")) {
      return <Login></Login>  
  }
    

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
            <div className={classes.toolbar} />
            <div className={classes.root}>
              <Grid container >       
                <ResponsiveDrawer classes={classes}/>
                <main className={classes.content}>
                  <Routes />
                </main>
              </Grid>
            </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
export default App;
