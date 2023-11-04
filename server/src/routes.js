const EasternRegionController = require('./controllers/EasternRegionController')
const NortheastController = require('./controllers/NortheastController')
const SouthController = require('./controllers/SouthController')
const TheNorthController = require('./controllers/TheNorthController')
const WesternRegionController = require('./controllers/WesternRegionController')

module.exports = (app) => {
   

    app.get('/easternRegions', EasternRegionController.index)
    
    app.post('/easternRegion', EasternRegionController.create)
    
    app.put('/easternRegion/:easternRegionId', EasternRegionController.put)
    
    app.delete('/easternRegion/:easternRegionId', EasternRegionController.delete)
    
    app.get('/easternRegion/:easternRegionId', EasternRegionController.show)

    
    
    app.get('/northeasts', NortheastController.index)
    
    app.post('/northeast', NortheastController.create)
    
    app.put('/northeast/:northeastId', NortheastController.put)

    app.delete('/northeast/:northeastId', NortheastController.delete)
    
    app.get('/northeast/:northeastId', NortheastController.show)

    
    app.get('/souths', SouthController.index)
    
    app.post('/south', SouthController.create)
    
    app.put('/south/:southId', SouthController.put)
    
    app.delete('/south/:southId', SouthController.delete)
    
    app.get('/south/:southId', SouthController.show)


    app.get('/theNorths', TheNorthController.index)
    
    app.post('/theNorth', TheNorthController.create)
    
    app.put('/theNorth/:theNorthId', TheNorthController.put)
    
    app.delete('/theNorth/:theNorthId', TheNorthController.delete)
    
    app.get('/theNorth/:theNorthId', TheNorthController.show)




    app.get('/westernRegions', WesternRegionController.index)
    
    app.post('/westernRegion', WesternRegionController.create)
    
    app.put('/westernRegion/:westernRegionId', WesternRegionController.put)
    
    app.delete('/westernRegion/:westernRegionId', WesternRegionController.delete)
    
    app.get('/westernRegion/:westernRegionId', WesternRegionController.show)
}