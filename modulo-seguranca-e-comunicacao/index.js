const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes   = require('./routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/seguranca-comunicacao', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(3339);