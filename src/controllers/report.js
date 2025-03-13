import reportModel from '../models/report.js'

class reportController {
    constructor() { }
    async create(req, res) {
        try {
            const data = await reportModel.create(req.body)

            res.status(201).json({ data })

        } catch (e) {
            res.status(500).send(e)

        }
    }
    async getAll(req, res) {
        try {
            res.status(201).json({ data })

        } catch (error) {
            res.status(500).send(e)


        }
    }
    async getOne(req, res) {
        try {res.status(200).json({data})

        } catch (error) {
            res.status(500).send(e)

        }
    }
    async update(req, res) {
        try {res.status(201).json({data})
            
        } catch (error) {
            res.status(500).send(e)
        }
     }
    async delete(req, res) {
        try {res.status(204).json({data})
            
        } catch (error) {
            res.status(500).send(e)
            
        }
     }

}

export default new reportController();