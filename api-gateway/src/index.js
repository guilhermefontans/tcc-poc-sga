const express  = require('express');
const httpProxy = require('express-http-proxy');
const routes   = require('./routes');
const helmet = require('helmet');
const app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(routes);
app.listen(3000);
