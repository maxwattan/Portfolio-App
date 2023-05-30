const express = require("express");
const app = express();
const cors = require("cors");
const bakeryController = require("./controllers/bakeryController")

//cors is api fetch cross origin server

//express is handling request api crud

app.use(cors());
app.use(express.json());

app.use("/sweets", bakeryController)

app.get('/', (req, res) => {
    res.send('Sweet Baked Goods 4 You <3');
  });

  app.get('*', (req,res) => {
    res.status(404).send("Page not Found!");
  });

module.exports = app;