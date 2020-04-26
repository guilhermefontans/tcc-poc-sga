const  { Router } = require('express');
const routes = Router();
const AreaController = require('./controller/AreaController');
const SensorController = require('./controller/SensorController');
const IncidenteController = require('./controller/IncidenteController');

routes.get('/', async function (request, response){
    return response.json({ message: 'Modulo de monitoramento' });
});

routes.post('/sensores', (request, response) => {
    SensorController.store(request, response);
});

routes.get('/sensores', (request, response) => {
    SensorController.index(request, response)
    return response
});

routes.get('/areas', (request, response) => {
    AreaaController.index(request, response)
    return response;
});

routes.get('/areas/:area_id', (request, response) => {
    AreaController.findById(request, response)
        .then(console.log(response.body));
});

routes.post('/incidentes', (request, response) => {
    IncidenteController.store(request, response)
});

routes.get('/incidentes', (request, response) => {
    IncidenteController.index(request, response)
});
module.exports = routes;