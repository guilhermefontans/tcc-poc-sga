import React, { useEffect, useState } from 'react';
import '../../index.css';
import { Container, Row, Form, Button } from 'react-bootstrap';
import api from  '../../services/sca.service'

function IncidenteForm() {

    const [areas, setAreas] = useState([]);
    const [area_id, setAreaId] = useState({});
    const [grauRisco, setGrauRisco] = useState({});
    const [tipo, setTipo] = useState({});
    const [data, setData] = useState({});

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
        const response = await api.post(
            '/incidentes',
            dados,
            {
                headers : {'x-access-token': token}
            })
        
        console.log(response)
    }

    return (
        
        <Container>sdsadsa
            <Row>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="data">
                    <Form.Label>Data</Form.Label>
                    <Form.Control name="data" type="datetime" placeholder="YYYY-MM-DD" onChange={e => setData(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="tipo">
                    <Form.Label>Gravidade do incidente</Form.Label>
                    <Form.Control as="select" name="tipo" onChange={e => setTipo(e.target.value)}>
                        <option>Secione o tipo de incidente</option>
                        <option key="tremor" value="tremor" >Tremor</option>
                        <option key="deslocamento" value="deslocamento" >Deslocamento</option>
                        <option key="umidade" value="umidade" >Aumento da umidade</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="grauRisco">
                    <Form.Label>Gravidade do incidente</Form.Label>
                    <Form.Control as="select" name="grauRisco" onChange={e => setGrauRisco(e.target.value)}>
                        <option>Selecione o nivel do risco</option>
                        <option key="baixo" value="baixo" >Baixo</option>
                        <option key="medio" value="medio" >Medio</option>
                        <option key="alto" value="alto" >Alto</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="area">
                    <Form.Label>Area afetada</Form.Label>
                    <Form.Control as="select" onChange={e => setAreaId(e.target.value)} >
                    {areas && areas.map(area => (
                        <option value={area._id} key={area._id}>{area.nome}</option>
                    ))}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </Row>
        </Container>
    )
}

export default IncidenteForm;