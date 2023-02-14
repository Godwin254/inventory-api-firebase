const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());


//import routes
require('./src/v1/routes/inventory.routes')(app);


//start server
app.listen(PORT, (error) => {
      if (error) {
            console.log(error);
      }
      console.log(`Server is running on port http://localhost:${PORT}`);
});

//export api
exports.api = functions.https.onRequest(app);