const  { Router } = require('express');
const CadastroAtivosController = require('./controllers/CadastroAtivosController');

const routes = Router();
routes.get('/', CadastroAtivosController.index);
module.exports = routes;
