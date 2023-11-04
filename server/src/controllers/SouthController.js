const { South } = require('../models')

module.exports = {
 
    async index(req, res) {
        try {
            const souths = await South.findAll()
            res.send(souths)
        } catch (err) {
            res.status(500).send({
                error: 'the Souths information was incorrect'
            })
        }
    },



    async create(req, res) {
        try {
            const south = await South.create(req.body)
            res.send(south.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create South incorrect'
            })
        }
    },


    async put(req, res) {
        try {
            await South.update(req.body, {
                where: {
                    id: req.params.southId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update South incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const south = await South.findOne({
                where: {
                    id: req.params.southId
                }
            })
            if (!south) {
                return res.status(403).send({
                    error: 'The South information was incorrect'
                })
            }
            await south.destroy()
            res.send(south)
        } catch (err) {
            res.status(500).send({
                error: 'The South information was incorrect'
            })
        }
    },


    async show(req, res) {
        try {
            const south = await South.findByPk(req.params.southId)
            res.send(south)
        } catch (err) {
            res.status(500).send({
                error: 'The South information was incorrect'
            })
        }
    },
}