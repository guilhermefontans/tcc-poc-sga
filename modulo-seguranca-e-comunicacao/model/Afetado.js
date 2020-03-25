const mongoose = require('mongoose');

const AfetadoSchema = new mongoose.Schema({
    email: String,
    area: Object
});

module.exports = mongoose.model('Afetado', AfetadoSchema);