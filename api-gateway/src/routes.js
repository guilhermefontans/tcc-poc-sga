const express  = require('express');
const httpProxy = require('express-http-proxy');
const router = express.Router();
const verifyJWT = require('./auth/verifyJWT');

const cadastroAtivosServiceProxy = httpProxy('http://modulo-cadastro-ativos:3334');
const relatoriosServiceProxy = httpProxy('http://modulo-relatorios:3333');
const autenticacaoServiceProxy = httpProxy('http://api-autenticacao:3335');
const monitoramentoServiceProxy = httpProxy('http://modulo-monitoramento:3338');
const segurancaComunicacaoServiceProxy = httpProxy('http://modulo-seguranca-e-comunicacao:3339');

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

router.post('/areas', verifyJWT, (req, res, next) => {
  segurancaComunicacaoServiceProxy(req, res, next);
});

router.get('/areas', verifyJWT, (req, res, next) => {
  segurancaComunicacaoServiceProxy(req, res, next);
});

router.post('/afetados', verifyJWT, (req, res, next) => {
  segurancaComunicacaoServiceProxy(req, res, next);
});

router.post('/disparar-alertas', verifyJWT, (req, res, next) => {
  segurancaComunicacaoServiceProxy(req, res, next);
});

router.get('/afetados', verifyJWT, (req, res, next) => {
  segurancaComunicacaoServiceProxy(req, res, next);
});

router.post('/incidentes', verifyJWT, (req, res, next) => {
  monitoramentoServiceProxy(req, res, next);
});

router.get('/incidentes', verifyJWT, (req, res, next) => {
  monitoramentoServiceProxy(req, res, next);
});

module.exports = router;