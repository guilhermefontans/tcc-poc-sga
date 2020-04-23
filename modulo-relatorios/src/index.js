const express  = require('express');
const cors = require('cors');
const routes   = require('./routes');

const app = express();

app.use(cors({ origin: 'http://api-gateway:3000'}));
//app.use(cors({ origin: 'http://api-gateway:5000'}));
app.use(express.json());
app.use(routes);

app.listen(3333);
