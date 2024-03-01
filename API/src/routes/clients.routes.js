const {Router} = require('express')
const ClientsController = require('../controllers/ClientsController')

const clientsRoutes = Router()

const clientsController = new ClientsController()

clientsRoutes.post('/', clientsController.createContacts)
clientsRoutes.get('/', clientsController.listContacts)

module.exports = clientsRoutes