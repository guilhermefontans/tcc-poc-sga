import React, { useEffect, useState } from 'react';
import '../../index.css';
import api from  '../../services/sca.service'
import Grid from '@material-ui/core/Grid';
import { Paper, Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function IncidenteForm() {

    const [areas, setAreas] = useState([]);
    const [area_id, setAreaId] = useState({});
    const [grauRisco, setGrauRisco] = useState({});
    const [tipo, setTipo] = useState({});
    const [data, setData] = useState({});
    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
          },
          form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
          },
  
    }));

    useEffect(() => {
        const token = localStorage.getItem('token');
        api.get(
            '/areas',
            {
                headers : {'x-access-token': token}
            }
        ).then(response => {
            setAreas(response.data);
        })            
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        let token = localStorage.getItem('token');
        const dados = {area_id, grauRisco, tipo, data};
        await api.post(
            '/incidentes',
            dados,
            {
                headers : {'x-access-token': token}
            }).then(() => {
                setOpen(true);
            }
        );
    }

    const classes = useStyles();

    return (
        <Grid container justify="center"  spacing={1}>
            <Grid item xs={12} lg={9}>
                <Typography variant="h4" color="textSecondary" align="center">Cadastro de Incidentes</Typography>
            </Grid>
            <Grid  item xs={12} lg={9} xl={6}>
                <Paper variant="outlined">
                    <Grid container justify="center">
                        <Grid item xs={6}>
                        <Collapse style={{paddingTop : 30}} in={open}>
                            <Alert
                                action={
                                <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                >
                                <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            >
                            Incidente cadastrado com sucesso!!
                            </Alert>
                        </Collapse>
                    <form onSubmit={handleSubmit} className={classes.form}>
                                <FormGroup>
                                    <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                                        <TextField required fullWidth margin="normal" id="outlined-basic" name="data" label="Data" variant="outlined" onChange={e => setData(e.target.value)}/>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup required={true}>
                                    <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                                        <InputLabel  id="label_tipo"htmlFor="tipo">Tipo de Incidente</InputLabel>
                                        <Select 
                                            variant="outlined"
                                            fullWidth
                                            label="Tipo de Incidente"
                                            id="tipo"
                                            value={tipo}
                                            onChange={e => setTipo(e.target.value)}
                                            >
                                                <MenuItem variant="outlined" margin="normal" value="tremor" key="tremor">Tremor</MenuItem>
                                                <MenuItem variant="outlined" margin="normal" value="deslocamento" key="deslocamento">Deslocamento</MenuItem>
                                                <MenuItem variant="outlined" margin="normal" value="umidade" key="umidade">Umidade</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup required={true}>
                                    <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                                        <InputLabel  id="label_area"htmlFor="area">Area</InputLabel>
                                        <Select 
                                            variant="outlined"
                                            fullWidth
                                            label="Area"
                                            id="area"
                                            value={area_id}
                                            onChange={e => setAreaId(e.target.value)}
                                            >
                                            {areas && areas.map(area => (
                                                <MenuItem variant="outlined" margin="normal" value={area._id} key={area._id}>{area.nome}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup required={true}>
                                    <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                                        <InputLabel  id="label_area"htmlFor="grauRisco">Grau de Risco</InputLabel>
                                        <Select 
                                            variant="outlined"
                                            fullWidth
                                            label="Grau de risco"
                                            id="grauRisco"
                                            value={grauRisco}
                                            onChange={e => setGrauRisco(e.target.value)}
                                            >
                                                <MenuItem variant="outlined" margin="normal" value="baixo" key="baixo">Baixo</MenuItem>
                                                <MenuItem variant="outlined" margin="normal" value="medio" key="medio">Medio</MenuItem>
                                                <MenuItem variant="outlined" margin="normal" value="alto"  key="alto">Alto</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup>
                                    <FormControl  style={{paddingTop: 20, paddingBottom: 20}} required={true} variant="outlined" margin="normal" className={classes.formControl}>
                                        <Button margin="normal" color="primary" variant="contained" type="submit">Submit</Button>
                                    </FormControl>
                                </FormGroup>
                            </form>
                             </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default IncidenteForm;