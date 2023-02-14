
// Importing db from dbConfig.js
const db = require('../model/dbConfig');
//CRUD operations for inventory

exports.allInventory = (req, res) => {

      //get all inventory
      db.collection('inventory').get()
            .then(snapshot => {
                  const inventory = [];
                  snapshot.forEach(doc => {
                        const data = doc.data();
                        inventory.push(data);
                  });
                  return res.status(200).json(inventory);
            })
            .catch(error => console.log(error));


}

exports.singleInventory = (req, res) => {

      //get single inventory
      const id = req.params.id;

      db.collection('inventory').doc(id).get()
            .then(doc => {
                  if (!doc.exists) {
                        return res.status(404).json({ error: 'Inventory not found' });
                  } else {
                        return res.status(200).json(doc.data());
                  }
            })
            .catch(error => console.log(error));


}

exports.createInventory = (req, res) => {

      //create new inventory
      const data = req.body;

      db.collection('inventory').add(data)
            .then(doc => {
                  res.status(201).json({ message: `New inventory added with ID: ${doc.id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}

exports.updateInventory = (req, res) => {

      //update inventory
      const id = req.params.id;
      const data = req.body;

      db.collection('inventory').doc(id).update(data)
            .then(() => {
                  res.status(200).json({ message: `Inventory updated with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });

}

exports.deleteInventory = (req, res) => {
      
      //delete inventory
      const id = req.params.id;

      db.collection('inventory').doc(id).delete()
            .then(() => {
                  res.status(200).json({ message: `Inventory deleted with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}