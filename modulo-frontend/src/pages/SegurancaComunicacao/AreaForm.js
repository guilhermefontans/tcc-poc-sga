import React, { useEffect, useState } from 'react';
import '../../index.css';
import api from '../../services/sca.service'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

function AreaForm() {

    const [nome, setNome] = useState("");
    const [open, setOpen] = React.useState(false);

    async function handleSubmit(e) {
        e.preventDefault()
        let token = localStorage.getItem('token');
        const dados = {nome};
        api.post(
            '/areas',
            dados,
            {
                headers : {'x-access-token': token}
            }
        ).then((response) => {
            setOpen(true);
        });
    }

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
    const classes = useStyles();

    return (
        <Grid container justify="center"  spacing={1}>
            <Grid item xs={12} lg={9}>
                <Typography variant="h4" color="textSecondary" align="center">Cadastro de areas</Typography>
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
                            Área cadastrada com sucesso!!
                            </Alert>
                        </Collapse>
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <FormGroup required={true}>
                                    <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                                        <TextField required fullWidth margin="normal" autoComplete="off" id="outlined-basic" name="nome" label="Nome" variant="outlined" onChange={e => setNome(e.target.value)}/>
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

export default AreaForm;