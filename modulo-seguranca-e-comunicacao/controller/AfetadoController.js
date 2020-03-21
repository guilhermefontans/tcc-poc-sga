const Area = require('../model/Area');
const Afetado = require('../model/Afetado');

module.exports = {
    async store(request, response) {
        let {email, area_id} = request.body;
        area = await Area.findOne({
           _id : area_id
        });

        if (! area) {
            throw new Error("Area nao encontrada");
        }

        afetado = await Afetado.create({
            email,
            area
        })

        return response.json(afetado);
    },

    async index(request, response) {
        const afetados = await Afetado.find();
        return response.json(afetados);
    },

    async findByEmail(request, response) {
        const afetado = await  Afetado.findOne({"email": request.params.email})
        return response.json(afetado);
    },

    async findByArea(request, response) {
        area = await Area.findOne({
            _id : request.params.area_id
         });
 
        const afetados = await  Afetado.find({"area": area})
        return response.json(afetados);
    }
}