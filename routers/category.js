const express = require("express"); 
const catCon = require("../controllers/category");
const routerOne = express.Router();
routerOne
  .route("/:id") 
  .get(catCon.getDataFun)
  .post((req, res) => {    
    res.send("this is from post");
  });
module.exports = routerOne;