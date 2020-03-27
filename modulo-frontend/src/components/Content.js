import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import App from '../App';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

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
export default function Content() {
    const classes = useStyles();

    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Paper className={classes.paper}> <Sidebar items={items}></Sidebar></Paper>
            </Grid>
            <Grid item xs={10}>
                <Paper className={classes.paper}><App></App></Paper>
            </Grid>
        </Grid>
        </div>
    );
}
