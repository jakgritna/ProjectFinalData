const { EasternRegion } = require('../models')

module.exports = {
 
    async index(req, res) {
        try {
            const easternRegions = await EasternRegion.findAll()
            res.send(easternRegions)
        } catch (err) {
            res.status(500).send({
                error: 'the  EasternRegion information was incorrect'
            })
        }
    },


   
    async create(req, res) {
        try {
            const easternRegion = await EasternRegion.create(req.body)
            res.send(easternRegion.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create EasternRegion incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await EasternRegion.update(req.body, {
                where: {
                    id: req.params.easternRegionId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update EasternRegion incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const easternRegion = await EasternRegion.findOne({
                where: {
                    id: req.params.easternRegionId
                }
            })
            if (!easternRegion) {
                return res.status(403).send({
                    error: 'The EasternRegion information was incorrect'
                })
            }
            await easternRegion.destroy()
            res.send(easternRegion)
        } catch (err) {
            res.status(500).send({
                error: 'The EasternRegion information was incorrect'
            })
        }
    },


    async show(req, res) {
        try {
            const easternRegion = await EasternRegion.findByPk(req.params.easternRegionId)
            res.send(easternRegion)
        } catch (err) {
            res.status(500).send({
                error: 'The EasternRegion information was incorrect'
            })
        }
    },
}