const UserController = require('../controller/UserController');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response){
        const user = await UserController.findOne(request);
        if(request.body.username === user.username && request.body.password === user.password){
            const id = 1;
            var token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 60 *60 * 24
            });
            response.status(200).send({ auth: true, token: token });
          }
          response.status(500).send('Login inválido!');
    },
}