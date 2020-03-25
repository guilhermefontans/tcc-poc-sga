const axios = require('axios');
const Area = require('../model/Area');
const Incidente = require('../model/Incidente');

module.exports = {
    async store(request, response) {
        let {grauRisco, tipo, data, area_id} = request.body;

        area = await Area.findOne({_id : area_id});

        data = new Date(data);

        if (! area) {
            throw new Error("Area nao encontrada");
        }

        incidente = await Incidente.create({
            grauRisco,
            tipo,
            data,
            area
        });

        await this.chamaModuloComunicacao(request, response)
        return response.json(incidente);    
    },

    async index(request, response) {
        const incidentes = await Incidente.find();
        return response.json(incidentes);
    },

    async chamaModuloComunicacao(request, response) {
        const token = request.headers['x-access-token'];
        const data = {area_id, grauRisco, tipo} = request.body;
        console.log("na chamada de comunicacao")
        const api = axios.create({
            baseURL: 'http://localhost:5000/'
        })
        response = await api.post(
            '/disparar-alertas',
            data,
            {
                headers : {'x-access-token': token}
            }
        )
        //console.log(response)
    }
}