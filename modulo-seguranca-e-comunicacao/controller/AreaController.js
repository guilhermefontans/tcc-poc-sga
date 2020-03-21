const Area = require('../model/Area');

module.exports = {
    async store(request, response) {
        let {nome} = request.body;

        area = await Area.create({
            nome
        });

        return response.json(area);
    },

    async index(request, response) {
        const areas = await Area.find();
        console.log(areas)
        return response.json(areas);
    },

    async findByName(request, response) {
        const areas = await  Area.findOne({"nome": request.params.nome})
        return response.json(areas);
    }
}