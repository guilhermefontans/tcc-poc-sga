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
        const {username, name, password} = request.body;

        console.log(name, username, password);
        user = await User.create({
            name,
            username,
            password
        });

        return response.json(user);
    }
}