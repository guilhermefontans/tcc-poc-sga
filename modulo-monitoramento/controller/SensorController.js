const Area = require('../model/Area');
const Sensor = require('../model/Sensor');

module.exports = {
    async store(request, response) {
        let {nome, tipo, area_id} = request.body;
        area = await Area.findOne({
           _id : area_id
        });

        if (! area) {
            throw new Error("Area nao encontrada");
        }

        sensor = await Sensor.create({
            nome,
            tipo,
            area
        })

        return response.json(sensor);
    },

    async index(request, response) {
        const sensores = await Sensor.find();
        return response.json(sensores);
    },
}