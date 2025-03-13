import  express from 'express'
const route = express.Router()
import reportController from '../controllers/report.js'



route.get('/',reportController.getAll)
route.get('/:id',reportController.getOne)
route.post('/',reportController.create)
route.put('/:id',reportController.update)
route.delete('/id',reportController.delete)

export default route;
