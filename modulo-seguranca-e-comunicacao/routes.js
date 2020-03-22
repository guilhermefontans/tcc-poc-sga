const  { Router } = require('express');
const routes = Router();
const AlertaController = require('./controller/AlertaController');
const AreaController = require('./controller/AreaController');
const AfetadoController = require('./controller/AfetadoController');

routes.get('/', async function (request, response){
    return response.json({ message: 'Modulo de segurança e comunicação' });
});

routes.post('/dispara-alerta', (request, response) => {
    AlertaController.notifica(request, response);
}); 

routes.post('/areas', (request, response) => {
    AreaController.store(request, response).then(console.log(response));
});

routes.get('/areas', (request, response) => {
    AreaController.index(request, response)
    console.log(response.body)
        return response
});

routes.get('/areas/:nome', (request, response) => {
    AreaController.findByName(request, response)
        .then(console.log(response.body));
});


routes.post('/afetados', (request, response) => {
    AfetadoController.store(request, response)
        .then(console.log(response));
});

routes.get('/afetados', (request, response) => {
    AfetadoController.index(request, response)
    console.log(response.body)
        return response
});

routes.get('/afetados/:email', (request, response) => {
    AfetadoController.findByEmail(request, response)
        .then(console.log(response.body));
});

routes.get('/afetados/area/:area_id', (request, response) => {
    AfetadoController.findByArea(request, response)
        .then(console.log(response.body));
});
module.exports = routes;