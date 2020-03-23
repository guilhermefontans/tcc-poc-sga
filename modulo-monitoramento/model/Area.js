const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
    nome: String
});

module.exports = mongoose.model('Area', AreaSchema);