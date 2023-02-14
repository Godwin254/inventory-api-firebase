const admin = require('firebase-admin');

admin.initializeApp({
      projectId: 'test-project-bcc89',
      credential: admin.credential.applicationDefault(), //using default service account
      databaseURL: 'http://localhost:8080',
})

const db = admin.firestore();

//create a new collection
db.collection('inventory');

module.exports = db;