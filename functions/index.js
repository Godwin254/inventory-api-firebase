const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

//import routes
require("./src/routes/inventory.routes")(app);


exports.api = functions.https.onRequest(app);


