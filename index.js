const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();


const PORT = process.env.PORT || 8000;

app.use(cors());

require('./v1/routes/inventory.routes')(app);

app.listen(PORT, (error) => {
      if (error) {
            console.log(error);
      }
      console.log(`Server is running on port http://localhost:${PORT}`);
});