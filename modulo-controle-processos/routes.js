const  { Router } = require('express');
const routes = Router();

routes.get('/', async function (request, response){
    return response.json({ message: 'Modulo de controle de processos' });
});
module.exports = routes;