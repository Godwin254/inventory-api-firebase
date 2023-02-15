const controller = require('../controllers/inventory.controller');

module.exports = (app) => {
      app.use(function(req, res, next){
            res.header("Access-Contol-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

            next();
      });

      app.get('/inventories/', controller.allInventory);
      app.get('/inventories/:id', controller.singleInventory);
      app.post('/inventories/', controller.createInventory);
      app.put('/inventories/:id', controller.updateInventory);
      app.delete('/inventories/:id', controller.deleteInventory);
}