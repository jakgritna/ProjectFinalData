const { Northeast } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const northeasts = await Northeast.findAll()
            res.send(northeasts)
        } catch (err) {
            res.status(500).send({
                error: 'The Northeast information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const northeast = await Northeast.create(req.body)
            res.send(northeast.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Northeast incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Northeast.update(req.body, {
                where: {
                    id: req.params.northeastId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Northeast incorrect'
            })
        }

    },

    async delete(req, res) {
        try {
            const northeast = await Northeast.findOne({
                where: {
                    id: req.params.northeastId
                }
            })
            if (!northeast) {
                return res.status(403).send({
                    error: 'The Northeast information was incorrect'
                })
            }
            await northeast.destroy()
            res.send(northeast)
        } catch (err) {
            res.status(500).send({
                error: 'The Northeast information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const northeast = await Northeast.findByPk(req.params.northeastId)
            res.send(northeast)
        } catch (err) {
            res.status(500).send({
                error: 'The Northeast information was incorrect'
            })
        }
    },

    

}