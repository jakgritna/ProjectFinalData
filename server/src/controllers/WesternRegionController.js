const { WesternRegion } = require('../models')

module.exports = {
   
    async index(req, res) {
        try {
            const westernRegions = await WesternRegion.findAll()
            res.send(westernRegions)
        } catch (err) {
            res.status(500).send({
                error: 'the WesternRegion information was incorrect'
            })
        }
    },


   
    async create(req, res) {
        try {
            const westernRegion = await WesternRegion.create(req.body)
            res.send(westernRegion.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create WesternRegion incorrect'
            })
        }
    },

   
    async put(req, res) {
        try {
            await WesternRegion.update(req.body, {
                where: {
                    id: req.params.westernRegionId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update WesternRegion incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const westernRegion = await WesternRegion.findOne({
                where: {
                    id: req.params.westernRegionId
                }
            })
            if (!westernRegion) {
                return res.status(403).send({
                    error: 'The WesternRegion information was incorrect'
                })
            }
            await westernRegion.destroy()
            res.send(westernRegion)
        } catch (err) {
            res.status(500).send({
                error: 'The WesternRegion information was incorrect'
            })
        }
    },

  
    async show(req, res) {
        try {
            const westernRegion = await WesternRegion.findByPk(req.params.westernRegionId)
            res.send(westernRegion)
        } catch (err) {
            res.status(500).send({
                error: 'The WesternRegion information was incorrect'
            })
        }
    },
}