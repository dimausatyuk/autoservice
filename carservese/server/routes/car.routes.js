const Router = require("express")
const router = new Router()
const carController = require("../controller/car.controller")


router.post('/client', carController.createClient)
router.get('/client', carController.getClient)
router.put('/client', carController.updateClient)
router.get('/clients', carController.getClients)
router.delete('/client', carController.deleteClient)

module.exports = router