const express  = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const router = express.Router();
const verifyJWT = require('./auth/verifyJWT');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');
const cadastroAtivosServiceProxy = httpProxy('http://localhost:3334');
const relatoriosServiceProxy = httpProxy('http://localhost:3333');

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
});

router.post('/login', (req, res, next) => {
  //temporariamente usuario mocado  
  if(req.body.user === 'fontans' && req.body.password === '123'){
    const id = 1;
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });
    res.status(200).send({ auth: true, token: token });
  }
  res.status(500).send('Login inválido!');
});

router.use('/cadastro-ativos', verifyJWT, (req, res, next) => {
   cadastroAtivosServiceProxy(req, res, next);
});

router.use('/relatorios', verifyJWT, (req, res, next) => {
  relatoriosServiceProxy(req, res, next);
});

module.exports = router;
