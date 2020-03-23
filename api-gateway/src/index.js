const express  = require('express');
const routes   = require('./routes');
const helmet = require('helmet');
const app = express();
const cors = require('cors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(routes);
app.listen(5000);
