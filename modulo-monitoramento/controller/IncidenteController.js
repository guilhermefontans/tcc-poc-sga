const axios = require('axios');
const Area = require('../model/Area');
const Incidente = require('../model/Incidente');

module.exports = {
    async store(request, response) {
        let {grauRisco, tipo, data, area_id} = request.body;

        area = await Area.findOne({
           _id : area_id
        });

        data = new Date(data);

        if (! area) {
            throw new Error("Area nao encontrada");
        }

        incidente = await Incidente.create({
            grauRisco,
            tipo,
            data,
            area
        })
        return response.json(incidente);
    },

    async index(request, response) {
        const incidentes = await Incidente.find();
        return response.json(incidentes);
    },

    async chamaModuloComunicacao(request, response) {
        const token = request.headers['x-access-token'];
        const data = { afetados, de, assunto, texto, html} = request.body;
        const apiResponse = await axios.post(
            'https://localhost:3000/notifica',
            data,
            {
                headers : {'x-access-token': token}
            }
        );
    }
}