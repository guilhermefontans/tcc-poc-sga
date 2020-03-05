const  { Router } = require('express');
const RelatorioController = require('./controllers/RelatorioController');

const routes = Router();
routes.get('/', RelatorioController.index);
module.exports = routes;
