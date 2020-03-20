const  { Router } = require('express');
const routes = Router();
const AlertaController = require('./controller/AlertaController');

routes.get('/', async function (request, response){
    return response.json({ message: 'Modulo de segurança e comunicação' });
});

routes.post('/dispara-alerta', (request, response) => {
    AlertaController.notifica(request, response);
}); 

module.exports = routes;