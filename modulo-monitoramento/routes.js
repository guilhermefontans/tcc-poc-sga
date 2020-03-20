const  { Router } = require('express');
const routes = Router();

routes.get('/', async function (request, response){
    return response.json({ message: 'Modulo de monitoramento' });
});
module.exports = routes;