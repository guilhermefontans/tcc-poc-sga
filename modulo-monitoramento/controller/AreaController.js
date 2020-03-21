const Area = require('../model/Area');

module.exports = {
    async findById(request, response) {
        const area = await  Area.findOne({_id: request.params.area_id})
        return response.json(area);
    },

    async index(request, response) {
        const areas = await Area.find();
        return response.json(areas);
    }
}