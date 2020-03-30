import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../services/sca.service'
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    placeholder: {
        height: 40,
        textAlign: "center"
    },
});

export default function SimpleTable() {
    const classes = useStyles();
    const [incidentes, setIncidentes] = useState([]);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef();

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
            },
        [],
    );
    useEffect(() => {
        const token = localStorage.getItem('token');
        api.get(
            '/incidentes',
            {
                headers : {'x-access-token': token}
            }
            
        ).then(response => {
            setIncidentes(response.data);
            handleLoad()
        })            
    }, []);
    
    const handleLoad = () => {
        clearTimeout(timerRef.current);
    
        if (query !== 'idle') {
          setQuery('idle');
          return;
        }
    
        setQuery('progress');
        timerRef.current = setTimeout(() => {
          setQuery('success');
        }, 2000);
      };

    return (
        
        <div className={classes.placeholder}>
        {query === 'success' ? (
        <Grid container justify="center"  spacing={1}>
            <Grid item xs={12} lg={9}>
                <Typography variant="h4" color="textSecondary" align="center">Listagem de incidentes</Typography>
            </Grid>
            <Grid item xs={12} lg={9}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Área</TableCell>
                            <TableCell align="center">Grau de Risco</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Data</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {incidentes.map((incidente) => (
                            <TableRow key={incidente._id}>
                                <TableCell align="center">{incidente.area.nome}</TableCell>
                                <TableCell align="center" component="th" scope="row">{incidente.grauRisco}</TableCell>
                                <TableCell align="center" component="th" scope="row">{incidente.tipo}</TableCell>
                                <TableCell align="center" component="th" scope="row">{incidente.data.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
        ) : (
            <Fade
            in={query === 'progress'}
            style={{
                transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
            >
            <CircularProgress align="center" size={100} />
            </Fade>
        )}
        </div>
    );
}