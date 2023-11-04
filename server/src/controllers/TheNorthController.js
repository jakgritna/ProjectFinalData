const { TheNorth } = require('../models')

module.exports = {
  
    async index(req, res) {
        try {
            const theNorths = await TheNorth.findAll()
            res.send(theNorths)
        } catch (err) {
            res.status(500).send({
                error: 'the TheNorth information was incorrect'
            })
        }
    },


   
    async create(req, res) {
        try {
            const theNorth = await TheNorth.create(req.body)
            res.send(theNorth.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create TheNorth incorrect'
            })
        }
    },

    
    async put(req, res) {
        try {
            await TheNorth.update(req.body, {
                where: {
                    id: req.params.theNorthId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update TheNorth incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const theNorth = await TheNorth.findOne({
                where: {
                    id: req.params.theNorthId
                }
            })
            if (!theNorth) {
                return res.status(403).send({
                    error: 'The TheNorth information was incorrect'
                })
            }
            await theNorth.destroy()
            res.send(theNorth)
        } catch (err) {
            res.status(500).send({
                error: 'The TheNorth information was incorrect'
            })
        }
    },

   
    async show(req, res) {
        try {
            const theNorth = await TheNorth.findByPk(req.params.theNorthId)
            res.send(theNorth)
        } catch (err) {
            res.status(500).send({
                error: 'The TheNorth information was incorrect'
            })
        }
    },
}