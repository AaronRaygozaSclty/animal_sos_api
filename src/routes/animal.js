import express from 'express'
const route = express.Router()
import  animalController from '../controllers/animal.js'


route.get('/', animalController.getAll) 
route.get('/:id',animalController.getOne)
route.post('/', animalController.create)
route.put('/:id',animalController.update)
route.delete('/:id',animalController.delete)


export default route;



