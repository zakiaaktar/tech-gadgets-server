const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 1000;


// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('tech gadgets server is running');
  });
  
  app.listen(port, () => {
    console.log(`tech gadgets server running on ${port}`);
  })