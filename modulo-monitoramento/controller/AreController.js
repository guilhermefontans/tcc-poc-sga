const Area = require('../model/Area');

module.exports = {
    async findByName(request, response) {
        const areas = await  Area.findOne({"nome": request.params.nome})
        return response.json(areas);
    }
}