
import { ObjectId } from 'mongodb';
import dbClient from '../../config/dbClient.js'; 

class userController  {
    constructor () {} 

    async create(req, res) {
            try {
                const data = await userModel.create(req.body)
                res.status(201).json({ data })
            } catch (e) {
                res.status(500).send(e.message || e)
            }
        }
    
        async getAll(req, res) {
            try {
                const data = await userModel.getAll() // asumiendo que `animalModel` tiene un método `find`
                res.status(200).json({ data })
            } catch (e) {
                res.status(500).send(e.message || e)
            }
        }
    
        async getOne(req, res) {
            try {
                const data = await userModel.getOne(req.params.id) // asumiendo que estás buscando por ID
                if (!data) {
                    return res.status(404).json({ message: 'Animal not found' })
                }
                res.status(200).json({ data })
            } catch (e) {
                res.status(500).send(e.message || e)
            }
        }
    
        async update(req, res) {
            try {
                const data = await userModel.update(req.params.id, req.body, { new: true })
                if (!data) {
                    return res.status(404).json({ message: 'User not found' })
                }
                res.status(200).json({ data })
            } catch (e) {
                res.status(500).send(e.message || e)
            }
        }
    
        async delete(req, res) {
            try {
                const {id} = req.params
                const data = await userModel.delete(id)
                if (!data) {
                    return res.status(404).json({ message: 'User not found' })
                }
                res.status(204).send() // Código 204 para una eliminación exitosa sin contenido
            } catch (e) {
                res.status(500).send(e.message || e)
            }
        }
}

export default new userController();
