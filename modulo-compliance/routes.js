const  { Router } = require('express');
const routes = Router();

routes.get('/', async function (request, response){
    return response.json({ message: 'Modulo de compliance' });
});
module.exports = routes;