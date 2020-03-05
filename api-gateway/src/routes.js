const express  = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const router = express.Router();

const cadastroAtivosServiceProxy = httpProxy('http://localhost:3334');
const relatoriosServiceProxy = httpProxy('http://localhost:3333');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
});

router.use('/cadastro-ativos', (req, res, next) => {
   cadastroAtivosServiceProxy(req, res, next);
});

router.use('/relatorios', (req, res, next) => {
  relatoriosServiceProxy(req, res, next);
});

module.exports = router;
