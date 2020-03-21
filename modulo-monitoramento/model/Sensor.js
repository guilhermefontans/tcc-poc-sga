const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    area: Object,    
});

module.exports = mongoose.model('Sensor', SensorSchema);