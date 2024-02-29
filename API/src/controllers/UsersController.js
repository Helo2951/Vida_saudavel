const knex = require('knex');

class UsersController {
    async createUser(req, res){
        const {name, email, password} = req.body;

        await knex('users').insert({
            name,
            email,
            password
        })
        return res.status(201).json('Usuário criado')
    }
    
}

module.exports = UsersController;