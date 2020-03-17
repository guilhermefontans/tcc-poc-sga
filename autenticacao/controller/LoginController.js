//const User = require('../model/User');
const UserController = require('../controller/UserController');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response){
        const user = await UserController.findOne(request);
        console.log(user.username)
        console.log(request.body.username)
        console.log(request.body.password)
        if(request.body.username === user.username && request.body.password === user.password){
            const id = 1;
            var token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 300
            });
            response.status(200).send({ auth: true, token: token });
          }
          response.status(500).send('Login inválido!');
    },
}