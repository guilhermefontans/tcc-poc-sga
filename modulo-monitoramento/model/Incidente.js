const mongoose = require('mongoose');

const IncidenteSchema = new mongoose.Schema({
    grauRisco: String,
    tipo: String,
    barragem: Object,
    areasEnvolvidas:[Object]
});

module.exports = mongoose.model('Incidente', IncidenteSchema);