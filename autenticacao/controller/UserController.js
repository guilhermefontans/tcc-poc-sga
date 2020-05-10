const User = require('../model/User');

module.exports = {
    async index(request, response) {
        const users = await User.find();
        return response.json(users);
    },

    async findOne(request, response){
        const {username, password} = request.body;
        const user = await User.findOne({
            username,
            password 
        });
        return user
    },

    async store(request, response) {
        const {username, name, password, role} = request.body;

        user = await User.create({
            name,
            username,
            password,
            role
        });

        return response.json(user);
    }
}