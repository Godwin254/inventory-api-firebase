const admin = require('firebase-admin');

admin.initializeApp({
      projectId: "express-firebase-api-3cd51",
      credentials: admin.credential.applicationDefault(),
      databaseURL: "http://localhost:8080"
});


const db = admin.firestore();


module.exports = db;