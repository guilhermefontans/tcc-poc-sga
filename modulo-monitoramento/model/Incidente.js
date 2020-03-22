const mongoose = require('mongoose');

const IncidenteSchema = new mongoose.Schema({
    grauRisco: String,
    tipo: String,
    data: Date,
    area: Object
});

module.exports = mongoose.model('Incidente', IncidenteSchema);