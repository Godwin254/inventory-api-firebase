const controller = require('../controllers/inventory.controller');

module.exports = (app) => {
      app.use(function(req, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.get('/api/v1/inventories/', controller.allInventory);
      app.get('/api/v1/inventories/:id', controller.singleInventory);
      app.post('/api/v1/inventories/', controller.createInventory);
      app.put('/api/v1/inventories/:id', controller.updateInventory);
      app.delete('/api/v1/inventories/:id', controller.deleteInventory);
}