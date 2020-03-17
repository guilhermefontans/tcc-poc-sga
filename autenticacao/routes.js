const  { Router } = require('express');
const UserController = require('./controller/UserController');
const LoginController = require('./controller/LoginController');

const routes = Router();
routes.get('/users', UserController.index);

routes.post('/users', UserController.store);
routes.post('/login', LoginController.login);

module.exports = routes;