const mongoose = require('mongoose');

const AlertaSchema = new mongoose.Schema({
    de: String,
    para: String,
    assunto: String,
    texto: String,
    html: String,
    status: String,
});

module.exports = mongoose.model('Alerta', AlertaSchema);