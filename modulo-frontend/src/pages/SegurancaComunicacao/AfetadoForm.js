import React, { useEffect, useState } from 'react';
import '../../index.css';
import { Container, Row, Form, Button } from 'react-bootstrap';
import api from '../../services/sca.service'

function AfetadoForm() {

    const [areas, setAreas] = useState([]);
    const [area_id, setAreaId] = useState({});
    const [email, setEmail] = useState("");

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
        const dados = {area_id, email};
        api.post(
            '/afetados',
            dados,
            {
                headers : {'x-access-token': token}
            }
        );
    }

    return (
        <Container>
            <Row>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="data">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="nome@exemplo.com" onChange={e => setEmail(e.target.value)}/>
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

export default AfetadoForm;