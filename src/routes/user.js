import expres from  'express'
const route = expres.Router()
import userController from  '../controllers/user.js'

route.get('/',userController.getAll)
route.get('/:id',userController.getOne)
route.post('/',userController.create)
route.put('/:id',userController.update)
route.delete('/id',userController.delete)

export default route;


