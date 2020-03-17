const express  = require('express');
const httpProxy = require('express-http-proxy');
const router = express.Router();
const verifyJWT = require('./auth/verifyJWT');

const cadastroAtivosServiceProxy = httpProxy('http://localhost:3334');
const relatoriosServiceProxy = httpProxy('http://localhost:3333');
const autenticacaoServiceProxy = httpProxy('http://localhost:3335');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
});

router.post('/login', (req, res, next) => {
  autenticacaoServiceProxy(req, res, next);
});

router.use('/cadastro-ativos', verifyJWT, (req, res, next) => {
   cadastroAtivosServiceProxy(req, res, next);
});

router.use('/relatorios', verifyJWT, (req, res, next) => {
  relatoriosServiceProxy(req, res, next);
});

module.exports = router;