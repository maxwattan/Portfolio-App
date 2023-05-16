const express = require("express");
const app = express();
const cors = require("cors");
// const controllers


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sweets 4 You <3');
  });

  app.get('*', (req,res) => {
    res.status(404).send("Page not Found!");
  });

module.exports = app;