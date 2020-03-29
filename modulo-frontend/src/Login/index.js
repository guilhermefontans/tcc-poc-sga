import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import api from '../services/sca.service'

function Login() {

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {username, password};
        const response = await api.post('/login', data);
        const { token} = response.data;
        if (token) {
            localStorage.setItem("token", token);
        }
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="username">
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="text" placeholder="Usuário" onChange={e => setUsername(e.target.value)}  />
            </Form.Group>
        
            <Form.Group controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
      </Form>
    );
  }
  
  export default Login;